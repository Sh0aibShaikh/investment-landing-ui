"use client";

import { Box, Button, Container, Stack, TextField, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { keyframes } from "@mui/system";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 40px rgba(232,184,75,0.15); }
  50%       { box-shadow: 0 0 80px rgba(232,184,75,0.28); }
`;

export default function CTASection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "80%",
          background: `radial-gradient(ellipse, ${theme.palette.primary.main}10 0%, transparent 65%)`,
          pointerEvents: "none",
          animation: `${glow} 5s ease-in-out infinite`,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 7 },
            borderRadius: "28px",
            border: `1px solid ${theme.palette.primary.main}25`,
            backgroundColor: theme.palette.background.paper,
            boxShadow: `0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`,
            animation: `${fadeUp} 0.7s ease both`,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "18px",
              backgroundColor: `${theme.palette.primary.main}18`,
              border: `1px solid ${theme.palette.primary.main}35`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.7rem" },
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Start Earning{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              More Today
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 480,
              mx: "auto",
              mb: 4.5,
              lineHeight: 1.75,
            }}
          >
            Join 1.2 lakh+ investors already earning 9–14% returns. Open your account in under 5 minutes — 100%
            paperless, fully regulated.
          </Typography>

          {/* Email signup */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="center"
            alignItems="stretch"
            sx={{ maxWidth: 480, mx: "auto", mb: 3 }}
          >
            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  fontSize: "0.92rem",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3.5,
                py: 1.5,
                borderRadius: "10px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontSize: "0.92rem",
              }}
            >
              Get Started
            </Button>
          </Stack>

          {/* Trust line */}
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            {["No lock-in period", "SEBI Regulated", "₹0 account opening fee"].map((item, i) => (
              <Typography
                key={i}
                variant="caption"
                sx={{
                  color: theme.palette.text.disabled,
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&::before": {
                    content: '"✓"',
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
