"use client";

import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { keyframes } from "@mui/system";
import { FEATURES } from "@/app/constants/constants";
import AppButton from "./AppButton";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export default function FeaturesSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "40%",
          background: `radial-gradient(ellipse, ${theme.palette.primary.main}08 0%, transparent 70%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            animation: `${fadeUp} 0.6s ease both`,
          }}
        >
          <Chip
            label="OUR PRODUCTS"
            size="small"
            sx={{
              mb: 2,
              backgroundColor: `${theme.palette.primary.main}15`,
              color: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}30`,
              fontWeight: 700,
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Investment Products
            <br />
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Built for Returns
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            From bonds to mutual funds, every product on InvestPro is vetted by our expert risk team before it reaches
            your portfolio.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Grid key={feature.title} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    background: feature.gradient,
                    border: `1px solid rgba(255,255,255,0.06)`,
                    borderRadius: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    animation: `${fadeUp} 0.6s ease both`,
                    animationDelay: `${0.1 + i * 0.12}s`,
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px ${feature.accentColor}25`,
                      borderColor: `${feature.accentColor}30`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "14px",
                          backgroundColor: `${feature.accentColor}18`,
                          border: `1px solid ${feature.accentColor}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon sx={{ fontSize: 26, color: feature.accentColor }} />
                      </Box>
                      <Chip
                        label={feature.badge}
                        size="small"
                        sx={{
                          backgroundColor: `${feature.badgeColor}15`,
                          color: feature.badgeColor,
                          border: `1px solid ${feature.badgeColor}30`,
                          fontWeight: 700,
                          fontSize: "0.68rem",
                          letterSpacing: "0.05em",
                        }}
                      />
                    </Stack>

                    <Typography variant="h5" sx={{ color: theme.palette.text.primary, mb: 1.5, fontWeight: 700 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7, mb: 3 }}>
                      {feature.description}
                    </Typography>

                    <Stack spacing={1} sx={{ mb: 3, flexGrow: 1 }}>
                      {feature.bullets.map((b, j) => (
                        <Stack key={j} direction="row" alignItems="center" spacing={1.2}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: feature.accentColor,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem" }}>
                            {b}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <AppButton
                      variantType="textLink"
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      sx={{
                        color: feature.accentColor,
                        "&:hover": {
                          backgroundColor: "transparent",
                          gap: 1,
                          "& .MuiButton-endIcon": { transform: "translateX(4px)" },
                        },
                        "& .MuiButton-endIcon": { transition: "transform 0.2s ease" },
                      }}
                    >
                      {feature.cta}
                    </AppButton>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
