import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { color, palette } from "@mui/system";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#2944c1",
    },
    secondary: {
      main: "#e94545",
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans, sans-serif",
        },
        h1: {
          fontFamily: "Montserrat, sans-serif",
          color: "#131314",
          lineHeight: "1.5",
        },
        h2: {
          fontFamily: "Montserrat, sans-serif",
          fontSize: "36px",
          color: "#131314",
          fontWeight: "600",
          lineHeight: "1.5",
          marginBottom: "16px",
        },
        h3: {
          fontFamily: "Montserrat, sans-serif",
        },
        h4: {
          fontFamily: "Montserrat, sans-serif",
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "20px",
        },
        h5: {
          fontFamily: "Montserrat, sans-serif",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "20px",
          lineHeight: "1.5",
        },
        h6: {
          fontFamily: "Montserrat, sans-serif",
          fontSize: "15px",
        },
        subtitle1: {
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: "20px",
        },
        subtitle2: {
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: "17px",
        },
        body1: {
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: "500",
          fontSize: "16px",
        },
        body2: {
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: "600",
          fontSize: "16px",
          color: "rgb(55, 65, 81)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          borderWidth: "2px",
          borderColor: "#2944c1",
          padding: "5px 12px",
          textTransform: "capitalize",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans, sans-serif",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "18px",
          color: "#131313",
        },
      },
    },
  },
});

export default theme;
