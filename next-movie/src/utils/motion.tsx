import type { BoxProps, GridProps, TypographyProps } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);
export const MotionGrid = motion<GridProps>(Grid);
export const MotionTypography = motion<TypographyProps>(Typography);

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
