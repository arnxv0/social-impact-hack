// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Empathetic color palette inspired by color theory
// Indigo: Trust, stability, wisdom
// Pink/Rose: Compassion, care, warmth
// Teal: Clarity, growth, hope
// Coral: Warmth, optimism, energy

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366f1", // Vibrant indigo - trust, stability
      light: "#818cf8",
      dark: "#4f46e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ec4899", // Warm pink - compassion, care
      light: "#f472b6",
      dark: "#db2777",
      contrastText: "#ffffff",
    },
    success: {
      main: "#10b981", // Fresh emerald - growth, hope
      light: "#34d399",
      dark: "#059669",
    },
    warning: {
      main: "#f59e0b", // Warm amber - warmth, optimism
      light: "#fbbf24",
      dark: "#d97706",
    },
    info: {
      main: "#06b6d4", // Bright cyan - clarity, trust
      light: "#22d3ee",
      dark: "#0891b2",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#dc2626",
    },
    background: {
      default: "#f8fafc", // Clean slate grey
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    ...Array(18).fill("0 25px 50px -12px rgba(0, 0, 0, 0.25)"),
  ] as any,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          borderRadius: 12,
          border: "1px solid rgba(148, 163, 184, 0.1)",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(8px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "none",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        elevation1: {
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
});
