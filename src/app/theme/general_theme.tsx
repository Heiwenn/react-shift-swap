import { createTheme } from '@mui/material/styles';
import colors from './colors';
import { TimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const generalTheme = createTheme({
  typography: {
      h1: {
        color: 'white',
        fontSize: '7rem',
        fontWeight: 700,
        lineHeight: 1,
        fontFamily: '"Roboto", "Helvetica"',
        textAlign: 'center',
      },
      h2: {
        color: colors.primary,
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: 1.2,
        fontFamily: '"Roboto", "Helvetica"',
        textAlign: 'left',
      },
      body1: {
        color: colors.dark,
        fontSize: '1rem',
        fontWeight: 100,
        lineHeight: 1,
        fontFamily: '"Roboto", "Helvetica"',
        textAlign: 'left',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          },
        },
        defaultProps: {
          elevation: 3,
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '100%',
            '& .MuiInputBase-root': {
              borderRadius: '0px',
              backgroundColor: 'white',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              backgroundColor: '#e0e0e0',
              borderColor: colors.neutral,
            },
          },
        },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',       // rounded shape
          padding: '5px 20px',       // custom padding for size
          fontWeight: 600,
          textTransform: 'none',      // keep text case as is
          boxShadow: 'none',
          backgroundColor: colors.dark,
        },
        textPrimary: {
          color: colors.secondary,
          '&:hover': {
            backgroundColor: colors.primary,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: colors.dark
          }
        }
      },
    },
  }
});

export default generalTheme;