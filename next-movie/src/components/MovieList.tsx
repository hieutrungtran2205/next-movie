import MovieCard from '@/components/MovieCard';
import MyPagination from '@/components/MyPagination';
import { CONTENT_MAX_WIDTH } from '@/utils/const';
import { MotionGrid, MotionTypography, fadeInUp, staggerContainer } from '@/utils/motion';
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

type MovieListProps = {
  data: any;
  title: string;
  type?: string;
};

function MovieList({ data, title, type }: MovieListProps) {
  const { results, total_pages } = data || {};

  return (
    <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto' }}>
      <MotionTypography
        variant="h6"
        color="#fcde56"
        fontWeight={600}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </MotionTypography>

      <motion.div variants={staggerContainer} initial="hidden" animate="show">
        <Grid container spacing={{ xs: 1, sm: 1, md: 5, lg: 5, xl: 5 }} py={1}>
          {results?.map((item: any) => (
            <MotionGrid item xs={6} sm={6} md={3} lg={2.4} xl={2.4} key={item.id} variants={fadeInUp}>
              <MovieCard data={item} type={type} />
            </MotionGrid>
          ))}
        </Grid>
      </motion.div>

      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
        <MyPagination totalPages={total_pages} />
      </Box>
    </Box>
  );
}

export default MovieList;
