import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#E8B84B",
      light: "#F5D080",
      dark: "#C49A2A",
      contrastText: "#0A1628",
    },

    secondary: {
      main: "#2DD4BF",
      light: "#5EEADB",
      dark: "#18A898",
      contrastText: "#0A1628",
    },

    background: {
      default: "#0A1628",
      paper: "#111F3A",
    },

    text: {
      primary: "#EEF2FF",
      secondary: "#8892A4",
      disabled: "#3D4A60",
    },

    divider: "rgba(255,255,255,0.07)",

    error: {
      main: "#F87171",
    },

    success: {
      main: "#2DD4BF",
    },

    warning: {
      main: "#E8B84B",
    },
  },

  typography: {
    fontFamily: "'DM Sans', 'Inter', sans-serif",

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.65,
      color: "#8892A4",
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.01em",
      textTransform: "none" as const,
    },
    caption: {
      letterSpacing: "0.04em",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "transparent",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#111F3A",
          border: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 700,
          fontSize: "0.9rem",
          padding: "10px 24px",
        },
        containedPrimary: {
          color: "#0A1628",
          backgroundColor: "#E8B84B",
          boxShadow: "0 0 24px rgba(232,184,75,0.3)",
          "&:hover": {
            backgroundColor: "#F5D080",
            boxShadow: "0 0 32px rgba(232,184,75,0.45)",
          },
        },
        containedSecondary: {
          color: "#0A1628",
          backgroundColor: "#2DD4BF",
          "&:hover": {
            backgroundColor: "#5EEADB",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.15)",
          color: "#EEF2FF",
          "&:hover": {
            borderColor: "#E8B84B",
            backgroundColor: "rgba(232,184,75,0.06)",
            color: "#E8B84B",
          },
        },
        text: {
          color: "#8892A4",
          "&:hover": {
            color: "#EEF2FF",
            backgroundColor: "rgba(255,255,255,0.04)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "& fieldset": {
            borderColor: "rgba(255,255,255,0.12)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(232,184,75,0.4)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#E8B84B",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
        colorPrimary: {
          backgroundColor: "rgba(232,184,75,0.12)",
          color: "#E8B84B",
          border: "1px solid rgba(232,184,75,0.3)",
        },
        colorSecondary: {
          backgroundColor: "rgba(45,212,191,0.12)",
          color: "#2DD4BF",
          border: "1px solid rgba(45,212,191,0.3)",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.07)",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: "#111F3A",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1D2E4A",
          border: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.78rem",
          borderRadius: 6,
        },
      },
    },
  },
});

export default theme;
