/**
 * Generates a fillable (AcroForm) invoice/estimate PDF that reproduces the
 * branded form mockup in docs/image.png, using the brand art in docs/images/
 * (logo mark, wordmark, phone lockup, slogan, veteran-owned banner).
 *
 * Requires pdf-lib (not a project dependency — install anywhere and point
 * NODE_PATH at it):
 *   npm i pdf-lib --prefix /tmp/pdfgen
 *   NODE_PATH=/tmp/pdfgen/node_modules node scripts/make-invoice-pdf.mjs
 *
 * Output: docs/invoice-fillable.pdf
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const GREEN = rgb(0.09, 0.34, 0.18);
const GOLD = rgb(0.76, 0.6, 0.25);
const INK = rgb(0.12, 0.14, 0.13);
const FIELD_BG = rgb(0.93, 0.95, 0.93);
const FIELD_BORDER = rgb(0.72, 0.79, 0.72);
const WHITE = rgb(1, 1, 1);

const PAGE_W = 612;
const PAGE_H = 792;
const M = 36; // outer margin
const CONTENT_W = PAGE_W - 2 * M;

const doc = await PDFDocument.create();
doc.setTitle('Invoice — First Response Property Solutions');
doc.setAuthor('First Response Property Solutions');
doc.setSubject('Estimate / Invoice');

const page = doc.addPage([PAGE_W, PAGE_H]);
const helv = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const form = doc.getForm();

const art = {};
for (const name of ['Logo', 'Name', 'Phone', 'Slogan', 'VetOwned']) {
  art[name] = await doc.embedPng(readFileSync(`docs/images/${name}.png`));
}

// --- helpers ---------------------------------------------------------------

function text(str, x, y, size, font = helv, color = INK) {
  page.drawText(str, { x, y, size, font, color });
}

function centered(str, cx, y, size, font, color) {
  const w = font.widthOfTextAtSize(str, size);
  page.drawText(str, { x: cx - w / 2, y, size, font, color });
}

// Draw an embedded image at a given width, preserving aspect ratio.
// (x, yTop) is the top-left corner; returns the drawn height.
function image(img, x, yTop, w) {
  const h = (w * img.height) / img.width;
  page.drawImage(img, { x, y: yTop - h, width: w, height: h });
  return h;
}

// AcroForm fields have no padding property, so draw the visible box ourselves
// and inset a borderless widget inside it — typed text then sits off the edge.
function textField(name, x, y, w, h, { multiline = false, fontSize = 11 } = {}) {
  const padX = 5;
  const padY = multiline ? 4 : 2;
  page.drawRectangle({
    x,
    y,
    width: w,
    height: h,
    color: FIELD_BG,
    borderColor: FIELD_BORDER,
    borderWidth: 1,
  });
  const tf = form.createTextField(name);
  if (multiline) tf.enableMultiline();
  tf.addToPage(page, {
    x: x + padX,
    y: y + padY,
    width: w - 2 * padX,
    height: h - 2 * padY,
    backgroundColor: FIELD_BG,
    borderWidth: 0,
  });
  tf.setFontSize(fontSize);
  return tf;
}

function checkBox(name, x, y, label) {
  const cb = form.createCheckBox(name);
  cb.addToPage(page, {
    x,
    y,
    width: 14,
    height: 14,
    borderColor: GREEN,
    backgroundColor: WHITE,
    borderWidth: 1.5,
  });
  text(label, x + 20, y + 3.5, 9, bold, INK);
}

// --- page frame -------------------------------------------------------------

page.drawRectangle({
  x: 18,
  y: 18,
  width: PAGE_W - 36,
  height: PAGE_H - 36,
  borderColor: GOLD,
  borderWidth: 1.5,
});
page.drawRectangle({
  x: 22,
  y: 22,
  width: PAGE_W - 44,
  height: PAGE_H - 44,
  borderColor: GREEN,
  borderWidth: 0.75,
});

// --- header: brand art on the left ------------------------------------------

const headerTop = PAGE_H - M;
image(art.Logo, M + 2, headerTop, 84);

const tx = M + 96;
let ty = headerTop - 2;
ty -= image(art.Name, tx, ty, 268) + 7;
ty -= image(art.Phone, tx + 2, ty, 226) + 7;
image(art.Slogan, tx + 2, ty, 234);

// --- header: title box on the right -------------------------------------------

const tbX = PAGE_W - M - 170;
const tbW = 170;
// INVOICE title in green with a thin gold underline
centered('INVOICE', tbX + tbW / 2, headerTop - 26, 26, bold, GREEN);
page.drawLine({
  start: { x: tbX + 10, y: headerTop - 34 },
  end: { x: tbX + tbW - 10, y: headerTop - 34 },
  thickness: 1.5,
  color: GOLD,
});
// attached invoice-number panel
page.drawRectangle({
  x: tbX,
  y: headerTop - 94,
  width: tbW,
  height: 52,
  borderColor: GREEN,
  borderWidth: 1.2,
});
text('INVOICE #', tbX + 10, headerTop - 56, 7.5, bold, GREEN);
textField('invoice_number', tbX + 10, headerTop - 84, tbW - 20, 20, { fontSize: 10 });

page.drawLine({
  start: { x: M, y: headerTop - 120 },
  end: { x: PAGE_W - M, y: headerTop - 120 },
  thickness: 1.5,
  color: GREEN,
});

// --- customer / address -------------------------------------------------------

let y = headerTop - 136;
text('CUSTOMER NAME:', M, y, 9, bold, GREEN);
textField('customer_name', M, y - 26, CONTENT_W, 22);

y -= 44;
text('PHONE:', M, y, 9, bold, GREEN);
textField('customer_phone', M, y - 26, 200, 22);
text('EMAIL:', M + 216, y, 9, bold, GREEN);
textField('customer_email', M + 216, y - 26, CONTENT_W - 216, 22);

y -= 44;
text('SERVICE ADDRESS:', M, y, 9, bold, GREEN);
textField('service_address', M, y - 34, CONTENT_W, 30, { multiline: true, fontSize: 10 });

// --- priority + estimate date --------------------------------------------------

y -= 54;
const prioH = 48;
page.drawRectangle({
  x: M,
  y: y - prioH,
  width: 330,
  height: prioH,
  borderColor: GREEN,
  borderWidth: 1.2,
});
text('PRIORITY OF WORK:', M + 8, y - 14, 9, bold, GREEN);
checkBox('priority_emergency', M + 10, y - 38, 'EMERGENCY');
checkBox('priority_urgent', M + 124, y - 38, 'URGENT');
checkBox('priority_routine', M + 216, y - 38, 'ROUTINE');

text('ESTIMATE DATE:', M + 348, y - 14, 9, bold, GREEN);
textField('estimate_date', M + 348, y - 40, CONTENT_W - 348, 22);

// --- scope of work --------------------------------------------------------------

y -= prioH + 18;
text('SCOPE OF WORK:', M, y, 9, bold, GREEN);
const scopeBottom = 224;
textField('scope_of_work', M, scopeBottom, CONTENT_W, y - 8 - scopeBottom, {
  multiline: true,
  fontSize: 10,
});

// --- totals row ------------------------------------------------------------------

y = scopeBottom - 16;
text('ESTIMATE TOTAL:', M, y, 9, bold, GREEN);
text('$', M + 2, y - 24, 16, bold, GREEN);
textField('estimate_total', M + 16, y - 28, 230, 24, { fontSize: 12 });

text('PROPOSED JOB START DATE:', M + 286, y, 9, bold, GREEN);
textField('proposed_start_date', M + 286, y - 28, CONTENT_W - 286, 24);

// --- billing ------------------------------------------------------------------------

y -= 46;
page.drawRectangle({
  x: M,
  y: y - 64,
  width: CONTENT_W,
  height: 64 + 14,
  borderColor: GREEN,
  borderWidth: 1.2,
});
text('BILLING INFORMATION:', M + 8, y, 9, bold, GREEN);
text('NAME:', M + 8, y - 22, 9, bold, INK);
textField('billing_name', M + 56, y - 26, CONTENT_W - 64, 18, { fontSize: 10 });
text('ADDRESS:', M + 8, y - 48, 9, bold, INK);
textField('billing_address', M + 56, y - 52, CONTENT_W - 64, 18, { fontSize: 10 });

// --- footer: veteran-owned banner art --------------------------------------------------

const vetW = 460;
image(art.VetOwned, (PAGE_W - vetW) / 2, 88, vetW);

form.updateFieldAppearances(helv);

writeFileSync('docs/invoice-fillable.pdf', await doc.save());
console.log('Wrote docs/invoice-fillable.pdf');
