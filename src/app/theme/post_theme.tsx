import { createTheme } from '@mui/material/styles';
import colors from './colors';
import generalTheme from './general_theme';

const postTheme = createTheme(generalTheme, {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: colors.secondary,
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            foregroundColor: colors.primary,
          },
        },
        defaultProps: {
          elevation: 10,
        },
      },
      
    },
});

export default postTheme;