import { createTheme, Theme } from '@mui/material/styles'

import { text, primary, secondary, background, jspreadsheet, table } from './colors'
import 'fontsource-noto-sans-jp'

declare module '@mui/material/styles' {
  interface Palette { // eslint-disable-line
    jspreadsheet: { blue: string, green: string, orange: string, pink: string },
    table: { th: string, thOpaque: string, primary: string, secondary: string, current: string, hover: string, border: string, borderOpaque: string, error: string },
  }
  interface PaletteOptions { // eslint-disable-line
    jspreadsheet?: { blue?: string, green?: string, orange?: string, pink?: string },
    table?: { th: string, thOpaque: string, primary: string, secondary: string, current: string, hover: string, border: string, borderOpaque: string, error: string }
  }
}

const fontSize = 16
const fontFamily = [
  'Noto Sans JP',
  'Roboto',
  '游ゴシック体',
  '游ゴシック',
  'Yu Gothic',
  'YuGothic',
  'ヒラギノ角ゴ ProN W3',
  'Hiragino Kaku Gothic ProN',
  'メイリオ',
  'Meiryo',
  'sans-serif'
].join(',')

const customTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

const baseTheme: Theme = createTheme({
  palette: {
    primary,
    secondary,
    text,
    background,
    jspreadsheet,
    table,
  },
  typography: {
    fontSize,
    fontFamily,
    htmlFontSize: 16,
    body1: {
      fontSize
    },
    body2: {
      fontSize
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1.0rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
        },
        '#root': {
          height: '100%',
        },
      }
    },
    // MuiPagination: {
    //   defaultProps: {
    //     variant: 'outlined',
    //     color: 'primary'
    //   }
    // },
    // MuiTextField: {
    //   defaultProps: {
    //     size: 'small',
    //     variant: 'outlined'
    //   }
    // },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       paddingTop: 8,
    //       paddingBottom: 8
    //     }
    //   }
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontWeight: 600,
    //       color: '#fff',
    //       textTransform: 'capitalize',
    //       minWidth: 0,
    //       minHeight: 0
    //     }
    //   },
    //   defaultProps: {
    //     color: 'inherit'
    //   }
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '8px'
    //     }
    //   }
    // },
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       [customTheme.breakpoints.up('sm')]: {
    //         paddingLeft: '1rem',
    //         paddingRight: '1rem'
    //       }
    //     }
    //   }
    // },
    // MuiDialog: {
    //   styleOverrides: {
    //     paper: {
    //       borderRadius: 8
    //     }
    //   }
    // }
  }
})

export const defaultTheme: Theme = {
  ...customTheme,
  ...baseTheme
}
