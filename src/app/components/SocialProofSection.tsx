"use client";

import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { keyframes } from "@mui/system";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const TESTIMONIALS = [
  {
    quote:
      "InvestPro helped me move from low-yield FDs to bonds earning 11.2% annually. The transparency and safety gave me confidence I never had before.",
    name: "Priya Mehta",
    role: "Chartered Accountant, Mumbai",
    rating: 5,
    returns: "11.2% p.a.",
  },
  {
    quote:
      "The auto-invest feature is brilliant. My idle cash now earns 9.8% without me touching it. Payouts hit every quarter like clockwork.",
    name: "Rahul Singhania",
    role: "Software Engineer, Bangalore",
    rating: 5,
    returns: "9.8% p.a.",
  },
  {
    quote:
      "As a retired professional, capital safety is everything. InvestPro's zero-default track record and senior secured bonds gave me exactly that.",
    name: "Dr. V. Krishnamurthy",
    role: "Retired IAS Officer, Chennai",
    rating: 5,
    returns: "10.5% p.a.",
  },
];

const PARTNER_LOGOS = ["NSE", "BSE", "SEBI", "NSDL", "CRISIL", "ICRA"];

export default function SocialProofSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "35%",
          height: "60%",
          background: `radial-gradient(ellipse at bottom right, ${theme.palette.primary.main}10 0%, transparent 65%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Partner logos strip */}
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            animation: `${fadeUp} 0.6s ease both`,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              color: theme.palette.text.disabled,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              mb: 3.5,
              fontSize: "0.72rem",
            }}
          >
            Regulated & Recognised By
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap" gap={{ xs: 2, md: 4 }}>
            {PARTNER_LOGOS.map((logo, i) => (
              <Box
                key={i}
                sx={{
                  px: { xs: 2.5, md: 3.5 },
                  py: 1.2,
                  borderRadius: "10px",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  transition: "border-color 0.2s, background 0.2s",
                  "&:hover": {
                    borderColor: `${theme.palette.primary.main}40`,
                    backgroundColor: `${theme.palette.primary.main}08`,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    color: theme.palette.text.disabled,
                    letterSpacing: "0.08em",
                    userSelect: "none",
                  }}
                >
                  {logo}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Section header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            animation: `${fadeUp} 0.6s ease both`,
            animationDelay: "0.1s",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: theme.palette.text.primary,
              mb: 1.5,
            }}
          >
            Trusted by{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              1.2 Lakh+
            </Box>{" "}
            Investors
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 460, mx: "auto" }}>
            Real investors. Real returns. Here's what they say about investing with InvestPro.
          </Typography>
        </Box>

        {/* Testimonial cards */}
        <Grid container spacing={3}>
          {TESTIMONIALS.map((t, i) => (
            <Grid key={t.name} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  p: 3.5,
                  borderRadius: "20px",
                  border: `1px solid rgba(255,255,255,0.06)`,
                  backgroundColor: theme.palette.background.default,
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  animation: `${fadeUp} 0.6s ease both`,
                  animationDelay: `${0.15 + i * 0.12}s`,
                  "&:hover": {
                    borderColor: `${theme.palette.primary.main}30`,
                    transform: "translateY(-4px)",
                    boxShadow: `0 20px 48px rgba(0,0,0,0.35)`,
                  },
                }}
              >
                {/* Stars */}
                <Stack direction="row" spacing={0.3} mb={2}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                  ))}
                </Stack>

                {/* Quote */}
                <FormatQuoteIcon sx={{ color: `${theme.palette.primary.main}40`, fontSize: 32, mb: 1, ml: -0.5 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.75,
                    mb: 3,
                    fontSize: "0.9rem",
                  }}
                >
                  {t.quote}
                </Typography>

                {/* Author */}
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: theme.palette.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
                      {t.role}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "8px",
                      backgroundColor: `${theme.palette.secondary.main}15`,
                      border: `1px solid ${theme.palette.secondary.main}30`,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: theme.palette.secondary.main }}>
                      {t.returns}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
