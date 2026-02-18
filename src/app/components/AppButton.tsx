"use client";

import { Button, ButtonProps } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

interface AppButtonProps extends ButtonProps {
  variantType?: "primary" | "nav" | "hero" | "textLink" | "outlined";
}
export default function AppButton({ variantType = "primary", sx, ...props }: AppButtonProps) {
  const theme = useTheme();

  const getStyles = () => {
    switch (variantType) {
      case "nav":
        return {
          color: theme.palette.text.secondary,
          fontWeight: 500,
          fontSize: "14px",
          px: 2,
          py: 1,
          borderRadius: "8px",
          "&:hover": {
            color: theme.palette.text.primary,
            backgroundColor: alpha(theme.palette.common.white, 0.04),
          },
        };

      case "hero":
        return {
          px: 4,
          py: 1.6,
          fontSize: "1rem",
          borderRadius: "12px",
        };

      case "outlined":
        return {
          px: 4,
          py: 1.6,
          fontSize: "1rem",
          borderRadius: "12px",
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
            backgroundColor: alpha(theme.palette.primary.main, 0.06),
          },
        };

      case "textLink":
        return {
          fontWeight: 700,
          fontSize: "0.88rem",
          px: 0,
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "transparent",
          },
        };

      case "primary":
      default:
        return {
          px: 3.5,
          py: 1.1,
          fontWeight: 700,
          borderRadius: "10px",
          boxShadow: `0 4px 22px ${theme.palette.primary.main}45`,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            boxShadow: `0 6px 28px ${theme.palette.primary.main}65`,
            transform: "translateY(-1px)",
          },
        };
    }
  };

  const getMuiVariant = () => {
    switch (variantType) {
      case "primary":
      case "hero":
        return "contained";
      case "outlined":
        return "outlined";
      default:
        return "text";
    }
  };

  return (
    <Button
      variant={getMuiVariant()}
      color="primary"
      sx={{
        ...getStyles(),
        ...sx,
      }}
      {...props}
    />
  );
}
