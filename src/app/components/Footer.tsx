"use client";

import { Box, Container, Divider, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FOOTER_LINKS } from "@/constants/constants";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: { xs: 7, md: 9 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "9px",
                  backgroundColor: theme.palette.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 16px ${theme.palette.primary.main}45`,
                }}
              >
                <TrendingUpIcon sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }} />
              </Box>
              <Typography fontWeight={800} fontSize="1.1rem" color={theme.palette.text.primary}>
                InvestPro
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, lineHeight: 1.75, maxWidth: 280, mb: 3 }}
            >
              India's most trusted investment platform for fixed-income securities. SEBI Registered Broker · Zero
              defaults since inception.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    color: theme.palette.text.disabled,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "8px",
                    p: 0.8,
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      borderColor: `${theme.palette.primary.main}40`,
                      backgroundColor: `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <Grid size={{ xs: 6, md: 4 }}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.72rem",
                  display: "block",
                  mb: 2,
                }}
              >
                {category}
              </Typography>
              <Stack spacing={1.2}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      transition: "color 0.18s",
                      "&:hover": { color: theme.palette.primary.main },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5, borderColor: theme.palette.divider }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.disabled, textAlign: { xs: "center", sm: "left" } }}
          >
            © {new Date().getFullYear()} InvestPro Financial Services Pvt. Ltd. All rights reserved.
            <br />
            SEBI Reg. No: INZ000313632 · CIN: U66120KA2022PTC165599
          </Typography>
          <Stack direction="row" spacing={2}>
            {["NSE", "BSE", "NSDL"].map((badge) => (
              <Typography
                key={badge}
                variant="caption"
                sx={{
                  color: theme.palette.text.disabled,
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  px: 1.2,
                  py: 0.4,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "5px",
                }}
              >
                {badge}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
