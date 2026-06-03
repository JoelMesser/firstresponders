/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#006428',        // primary brand
        'green-deep': '#003C18', // dark sections
        'green-darker': '#00280F', // footer / top utility bar
        gold: '#C0901F',         // accent, rules, icons
        'gold-light': '#E0BC6A', // highlights on dark
        red: '#D7392B',          // ALL primary CTAs / urgency
        'red-dark': '#A82518',   // CTA hover/gradient
        ink: '#16221B',          // body text
        mist: '#F4F6F3',         // section backgrounds
        line: '#E2E7E2',         // borders
        mute: '#5E6560',         // secondary text
      },
      fontFamily: {
        display: ['"Barlow Semi Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 6vw, 3.9rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        h2: ['2.4rem', { lineHeight: '1.05' }],
        h3: ['1.25rem', { lineHeight: '1.15' }],
        caption: ['0.85rem', { lineHeight: '1.3' }],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
