// src/components/AnimatedCard.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';

// Styled component with Framer Motion
const AnimatedCardWrapper = styled(motion.div)`
  margin: 20px;
  cursor: pointer;
`;

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

interface AnimatedCardProps {
  title: string;
  description: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description }) => {
  return (
    <AnimatedCardWrapper
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {description}
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<Favorite />}
            color="primary"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </AnimatedCardWrapper>
  );
};

export default AnimatedCard;
