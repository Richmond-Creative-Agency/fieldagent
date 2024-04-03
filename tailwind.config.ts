import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      current: 'currentColor',
      green: '#4D8242',
      lightBlue: '#218196',
      primary: '#023436',
      gray: '#DCE1DE',
      red: '#DB716E',
    },
  },
  plugins: [],
};
export default config;
