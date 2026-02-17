"use client";

import { Box, Button, Chip, Container, Stack, Typography, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { keyframes } from "@mui/system";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatA = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50%       { transform: translateY(-12px) rotate(-2deg); }
`;

const floatB = keyframes`
  0%, 100% { transform: translateY(0px) rotate(2deg); }
  50%       { transform: translateY(-8px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(232,184,75,0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(232,184,75,0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "55%",
            height: "70%",
            background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}18 0%, transparent 65%)`,
            borderRadius: "50%",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            width: "45%",
            height: "55%",
            background: `radial-gradient(ellipse at center, ${theme.palette.secondary.main}12 0%, transparent 65%)`,
            borderRadius: "50%",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 10 } }}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={{ xs: 6, md: 4 }}>
          <Box sx={{ flex: 1, maxWidth: { md: "56%" } }}>
            <Box
              sx={{
                animation: `${fadeUp} 0.6s ease both`,
                animationDelay: "0.1s",
                mb: 3,
              }}
            >
              <Chip
                icon={<ShieldOutlinedIcon sx={{ fontSize: "14px !important" }} />}
                label="SEBI Registered · Zero defaults since 2010"
                size="small"
                sx={{
                  backgroundColor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.primary.main}35`,
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  letterSpacing: "0.03em",
                  px: 0.5,
                  "& .MuiChip-icon": { color: theme.palette.primary.main },
                }}
              />
            </Box>

            <Box sx={{ animation: `${fadeUp} 0.6s ease both`, animationDelay: "0.2s" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3.8rem", lg: "4.2rem" },
                  lineHeight: 1.08,
                  mb: 0.5,
                  color: theme.palette.text.primary,
                }}
              >
                Grow Your
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3.8rem", lg: "4.2rem" },
                  lineHeight: 1.08,
                  mb: 0.5,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: `${shimmer} 4s linear infinite`,
                }}
              >
                Wealth
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3.8rem", lg: "4.2rem" },
                  lineHeight: 1.08,
                  color: theme.palette.text.primary,
                }}
              >
                With Confidence
              </Typography>
            </Box>

            <Box
              sx={{
                animation: `${fadeUp} 0.6s ease both`,
                animationDelay: "0.35s",
                mt: 3,
                mb: 4,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.75,
                  maxWidth: 500,
                }}
              >
                Invest in premium bonds, mutual funds, and fixed-income securities. Earn{" "}
                <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  9–14% returns
                </Box>{" "}
                with institutional-grade security and full liquidity.
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ animation: `${fadeUp} 0.6s ease both`, animationDelay: "0.5s" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#investments"
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  animation: `${pulse} 2.5s ease infinite`,
                  animationDelay: "1s",
                }}
              >
                Start Investing
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                href="#about"
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: "1rem",
                  borderRadius: "12px",
                }}
              >
                How It Works
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{
                mt: 5,
                animation: `${fadeUp} 0.6s ease both`,
                animationDelay: "0.65s",
              }}
            >
              {[
                { value: "₹2,400Cr+", label: "Assets Managed" },
                { value: "1.2L+", label: "Investors" },
                { value: "100%", label: "Repayment Rate" },
              ].map((stat, i) => (
                <Box key={i} sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: theme.palette.text.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.text.disabled, letterSpacing: "0.04em" }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: { xs: 320, md: 480 },
              width: "100%",
              animation: `${fadeUp} 0.7s ease both`,
              animationDelay: "0.4s",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: 0, md: "5%" },
                left: { xs: "5%", md: "8%" },
                right: { xs: "5%", md: "5%" },
                animation: `${floatA} 6s ease-in-out infinite`,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "20px",
                border: `1px solid rgba(255,255,255,0.08)`,
                boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)`,
                p: 3,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2.5}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.disabled, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    Portfolio Value
                  </Typography>
                  <Typography
                    sx={{ fontSize: "2rem", fontWeight: 800, color: theme.palette.text.primary, lineHeight: 1.2 }}
                  >
                    ₹18,42,650
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.6,
                    borderRadius: "8px",
                    backgroundColor: `${theme.palette.secondary.main}18`,
                    border: `1px solid ${theme.palette.secondary.main}35`,
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <TrendingUpIcon sx={{ fontSize: 14, color: theme.palette.secondary.main }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: theme.palette.secondary.main }}>
                      +12.4%
                    </Typography>
                  </Stack>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="flex-end" spacing={0.8} sx={{ height: 56, mb: 2.5 }}>
                {[35, 52, 45, 68, 58, 75, 62, 88, 72, 95, 84, 100].map((h, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: "3px 3px 0 0",
                      background:
                        i === 11
                          ? `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                          : `rgba(255,255,255,0.07)`,
                      transition: "height 0.3s ease",
                    }}
                  />
                ))}
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
                  Jan 2024
                </Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
                  Dec 2024
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "2%", md: "4%" },
                left: { xs: "5%", md: "0%" },
                animation: `${floatB} 5s ease-in-out infinite`,
                animationDelay: "0.8s",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "16px",
                border: `1px solid ${theme.palette.primary.main}30`,
                boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${theme.palette.primary.main}18`,
                p: 2,
                minWidth: 180,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.disabled, letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                Monthly Return
              </Typography>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: 800, color: theme.palette.primary.main, lineHeight: 1.3 }}
              >
                +₹9,840
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>
                  Auto-credited today
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: { xs: "2%", md: "8%" },
                right: { xs: "0%", md: "-4%" },
                animation: `${floatA} 7s ease-in-out infinite`,
                animationDelay: "1.2s",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "14px",
                border: `1px solid ${theme.palette.secondary.main}30`,
                p: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  backgroundColor: `${theme.palette.secondary.main}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShieldOutlinedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "0.78rem", fontWeight: 700, color: theme.palette.text.primary, lineHeight: 1.2 }}
                >
                  Bank-Grade
                </Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
                  256-bit Encrypted
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
