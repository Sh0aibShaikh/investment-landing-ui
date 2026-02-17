"use client";

import { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton, Stack, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS } from "@/app/constants/constants";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const theme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff < -6 || currentY < 10) {
        setVisible(true);
      } else if (diff > 6 && currentY > 80) {
        setVisible(false);
      }

      setScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const navbarSx = mounted
    ? {
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: [
          "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
          "background-color 0.3s ease",
          "box-shadow 0.3s ease",
        ].join(", "),
        backgroundColor: scrolled ? `${theme.palette.background.paper}f2` : theme.palette.background.default,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
      }
    : {
        transform: "translateY(0)",
        transition: "none",
        backgroundColor: theme.palette.background.default,
        backdropFilter: "none",
        boxShadow: "none",
      };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ...navbarSx,
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  backgroundColor: theme.palette.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 18px ${theme.palette.primary.main}50`,
                  flexShrink: 0,
                }}
              >
                <TrendingUpIcon sx={{ color: theme.palette.primary.contrastText, fontSize: 22 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 800,
                  letterSpacing: "-0.4px",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  userSelect: "none",
                }}
              >
                InvestPro
              </Typography>
            </Stack>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.25 }}>
              {NAV_LINKS.map((label) => (
                <Button
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s, background-color 0.2s",
                    "&:hover": {
                      color: theme.palette.text.primary,
                      backgroundColor: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}

              <Button
                variant="contained"
                color="primary"
                href="#contact"
                sx={{
                  ml: 2.5,
                  px: 3.5,
                  py: 1.1,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: `0 4px 22px ${theme.palette.primary.main}45`,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    boxShadow: `0 6px 28px ${theme.palette.primary.main}65`,
                    transform: "translateY(-1px)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Get Started
              </Button>
            </Box>

            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: theme.palette.text.secondary,
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: "10px",
                p: 1,
                transition: "all 0.2s",
                "&:hover": {
                  color: theme.palette.text.primary,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.15)",
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ minHeight: { xs: 68, md: 76 } }} />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} navLinks={NAV_LINKS} />
    </>
  );
}
