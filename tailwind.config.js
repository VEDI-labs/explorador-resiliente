module.exports = {
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        300: '#3485EF',
        500: '#053778',
        900: '#12215E'
      },
      accent: {
        300: '#00D8A4',
        500: '#0BA882',
        900: '#055B46'
      },
      gray: {
        900: '#081C1F',
        800: '#213335',
        700: '#39494C',
        600: '#526062',
        500: '#6B7779',
        400: '#9CA4A5',
        300: '#B5BBBC',
        200: '#CED2D2',
        100: '#E1E5E6',
        50: '#EEF7FE'
      },
      error: '#F53019',
      white: '#FFFFFF'
    },
    customForms: theme => ({
      default: {
        input: {
          borderColor: theme('colors.gray.100'),
          outline: 'none',
          '&.error': {
            borderColor: theme('colors.error')
          },
          '&:hover': {
            borderColor: theme('colors.primary.300'),
            boxShadow: 'none'
          },
          '&:active': {
            borderColor: theme('colors.primary.300')
          },
          '&:focus': {
            backgroundColor: theme('colors.gray.50'),
            borderColor: theme('colors.primary.300'),
            boxShadow: 'none'
          }
        }
      }
    })
  }
}
