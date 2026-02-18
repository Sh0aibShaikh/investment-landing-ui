"use client";

import { STATS } from "@/app/constants/constants";
import { Box, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { CountingNumber } from "./CountingNumber";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export default function StatsBar() {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: theme.palette.divider,
              }}
            />
          }
          spacing={{ xs: 3, sm: 0 }}
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Box
                key={i}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  px: { sm: 2, md: 3 },
                  animation: `${fadeIn} 0.5s ease both`,
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    backgroundColor: `${stat.color}15`,
                    border: `1px solid ${stat.color}30`,
                    mb: 1.5,
                  }}
                >
                  <Icon sx={{ fontSize: 22, color: stat.color }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <CountingNumber value={stat.value} isAnimating={isVisible} />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.82rem",
                    mt: 0.3,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
