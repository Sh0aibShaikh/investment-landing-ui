"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AppButton from "../AppButton";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: string[];
}

export default function MobileDrawer({ open, onClose, navLinks }: MobileDrawerProps) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          backgroundColor: theme.palette.background.paper,
          borderLeft: "1px solid",
          borderColor: theme.palette.divider,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2.5,
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "9px",
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 14px ${theme.palette.primary.main}50`,
              flexShrink: 0,
            }}
          >
            <TrendingUpIcon sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }} />
          </Box>
          <Typography fontWeight={800} fontSize="16px" color={theme.palette.text.primary} letterSpacing="-0.3px">
            InvestPro
          </Typography>
        </Stack>

        <IconButton
          aria-label="Close navigation menu"
          onClick={onClose}
          size="small"
          sx={{
            color: theme.palette.text.secondary,
            border: "1px solid",
            borderColor: theme.palette.divider,
            borderRadius: "8px",
            p: 0.6,
            "&:hover": {
              color: theme.palette.text.primary,
              backgroundColor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Typography
        variant="caption"
        sx={{
          px: 3,
          pt: 2.5,
          pb: 1,
          display: "block",
          color: theme.palette.text.disabled,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontSize: "12px",
        }}
      >
        Navigation
      </Typography>

      <List disablePadding sx={{ px: 1.5 }}>
        {navLinks.map((label) => (
          <ListItemButton
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={onClose}
            sx={{
              borderRadius: "10px",
              mb: 0.5,
              px: 2,
              py: 1.3,
              color: theme.palette.text.secondary,
              fontWeight: 500,
              transition: "all 0.18s ease",
              position: "relative",
              "&:hover": {
                backgroundColor: `${theme.palette.primary.main}12`,
                color: theme.palette.primary.main,
                "&::before": {
                  opacity: 1,
                  transform: "scaleY(1)",
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "20%",
                height: "60%",
                width: "3px",
                borderRadius: "0 3px 3px 0",
                backgroundColor: theme.palette.primary.main,
                opacity: 0,
                transform: "scaleY(0.4)",
                transition: "opacity 0.18s ease, transform 0.18s ease",
              },
            }}
          >
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "0.01em",
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          px: 2.5,
          py: 3,
          borderTop: "1px solid",
          borderColor: theme.palette.divider,
        }}
      >
        <AppButton sx={{ width: "100%" }} variantType="primary" href="#contact">
          Get Started
        </AppButton>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            color: theme.palette.text.disabled,
            letterSpacing: "0.02em",
          }}
        >
          Trusted wealth management since 2010
        </Typography>
      </Box>
    </Drawer>
  );
}
