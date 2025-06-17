import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

function useSize(sizes: Array<number> = [2, 2, 4, 5, 5]) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));
  const size = useMemo(() => {
    if (isXs) return sizes[0];
    if (isSm) return sizes[1];
    if (isMd) return sizes[2];
    if (isLg) return sizes[3];
    if (isXl) return sizes[4];
  }, [isLg, isMd, isSm, isXl, isXs, sizes]);
  return size || 2;
}

export default useSize;
