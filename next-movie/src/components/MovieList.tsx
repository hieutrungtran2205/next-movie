import MovieCard from '@/components/MovieCard';
import MyPagination from '@/components/MyPagination';
import { CONTENT_MAX_WIDTH } from '@/utils/const';
import { Box, Grid, Typography } from '@mui/material';

type MovieListProps = {
  data: any;
  title: string;
  type?: string;
};

function MovieList({ data, title, type }: MovieListProps) {
  const { results, total_pages } = data || {};
  return (
    <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto' }}>
      <Typography variant="h6" color="#fcde56" fontWeight={600}>
        {title}
      </Typography>
      <Grid container spacing={{ xs: 1, sm: 1, md: 5, lg: 5, xl: 5 }} py={1}>
        {results?.map((item: any) => (
          <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2.4} key={item.id}>
            <MovieCard data={item} type={type} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
        <MyPagination totalPages={total_pages} />
      </Box>
    </Box>
  );
}

export default MovieList;
