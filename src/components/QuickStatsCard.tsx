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
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          background: gradient,
          color: "white",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 0.5,
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            {count}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              fontSize: { xs: "0.9rem", sm: "1rem" },
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
            opacity: 0.1,
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
