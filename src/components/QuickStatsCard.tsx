import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface QuickStatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  title,
  value,
  icon,
  gradient,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <Card
        sx={{
          background: gradient,
          color: "white",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          border: "none",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <CardContent sx={{ position: "relative", zIndex: 1, p: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.25)",
                borderRadius: "12px",
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {icon}
            </Box>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              fontSize: { xs: "2.5rem", sm: "3rem" },
              textShadow: "0 2px 8px rgba(0,0,0,0.1)",
              letterSpacing: "-0.03em",
            }}
          >
            {count}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            bottom: -20,
            right: -20,
            opacity: 0.08,
            fontSize: "8rem",
          }}
        >
          {icon}
        </Box>
      </Card>
    </motion.div>
  );
};

export default QuickStatsCard;
