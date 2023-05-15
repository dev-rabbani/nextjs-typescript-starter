const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    './.storybook/preview.js',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    /**
     * WARNING: If you make changes to the breakpoints then,
     * please update the keys array/BREAKPOINTS object in 'src/themes/interface'.
     */
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      secondary: ['var(--font-secondary)', ...fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        darker: 'rgb(var(--color-primary-darker) / <alpha-value>)',
        dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        lighter: 'rgb(var(--color-primary-lighter) / <alpha-value>)',
      },
      black: {
        DEFAULT: 'rgb(var(--color-black) / <alpha-value>)',
        light: 'rgb(var(--color-black-light) / <alpha-value>)',
      },
      white: 'rgb(var(--color-white) / <alpha-value>)',
      gray: {
        dark: 'rgb(var(--color-gray-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
        light: 'rgb(var(--color-gray-light) / <alpha-value>)',
      },
      info: {
        dark: 'rgb(var(--color-info-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
        light: 'rgb(var(--color-info-light) / <alpha-value>)',
      },
      success: {
        dark: 'rgb(var(--color-success-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
        light: 'rgb(var(--color-success-light) / <alpha-value>)',
      },
      warning: {
        dark: 'rgb(var(--color-warning-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
        light: 'rgb(var(--color-warning-light) / <alpha-value>)',
      },
      danger: {
        dark: 'rgb(var(--color-danger-dark) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
        light: 'rgb(var(--color-danger-light) / <alpha-value>)',
      },
    },
    backgroundImage: {
      'primary-gradient-1':
        'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1.5',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.57',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5',
        },
      ],
      md: [
        '1.125rem',
        {
          lineHeight: '1.55',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.5',
        },
      ],
      xl: [
        '1.5rem',
        {
          lineHeight: '1.5',
        },
      ],
      '2xl': [
        '2rem',
        {
          lineHeight: '1.5',
        },
      ],
      '3xl': [
        '3rem',
        {
          lineHeight: '1.33',
        },
      ],
      '4xl': [
        '4rem',
        {
          lineHeight: '1.25',
        },
      ],
    },
    boxShadow: {
      1: '0px 0px 16px 0px rgba(12, 94, 232, 0.1)',
      2: '0px 11px 20px rgba(12, 94, 232, 0.16)',
      none: 'none',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        DEFAULT: '350ms',
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        toRightFromLeft: {
          '49%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)', opacity: '0' },
          '51%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s both',
        fadeInUp: 'fadeInUp .4s both',
        fadeInDown: 'fadeInDown .4s both',
        fadeInLeft: 'fadeInLeft .4s both',
        fadeInRight: 'fadeInRight .4s both',
        toRightFromLeft: 'toRightFromLeft 0.5s forwards',
      },
      borderRadius: {
        5: '.3125rem',
        10: '.625rem',
        20: '1.25rem',
        30: '1.875rem',
        40: '2.5rem',
      },
      zIndex: {
        1: '1',
        99: '99',
        111: '111',
        444: '444',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
