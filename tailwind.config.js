module.exports = {
    content: [
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    'light': '#FFE1C6',
                    'medium': '#EF9E86',
                    'dark': '#DE6F5B',
                },
                pink: {
                    'light': '#FBD5E7',
                    'medium': '#FFACB2',
                    'dark': '#ED8195',
                },
                purple: {
                    'light': '#F7FEFF',
                    'medium': '#E6EDFF',
                    'dark': '#C0C7FF',
                },
                green: {
                    'light': '#BEDEE2',
                    'medium': '#82B4AD',
                    'dark': '#588A83',
                },
                black: {
                    'light': '#B3ADAD',
                    'medium': '#85807D',
                    'dark': '#53514F',
                },
                grey: {
                    'light': '#F3F5EA',
                    'medium': '#D5CEBE',
                    'dark': '#B1A493',
                }
            }
        },
        fontFamily: {
            sans: ['DM Serif Display', 'serif'],
            serif: ['DM Sans', 'serif'],
        }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
  }