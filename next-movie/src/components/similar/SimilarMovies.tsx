'use client';

import { useQuerySimilarMovies } from '@/api/movie/similar';
import MovieCard from '@/components/MovieCard';
import useSize from '@/hooks/useSize';
import { Box, Grid, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { memo } from 'react';
import Carousel from 'react-material-ui-carousel';

function SimilarMovies({ id }: { id: string }) {
  const { data, isLoading } = useQuerySimilarMovies(id);
  const { results } = data || {};
  const chunkSize = useSize();
  const chunkedItems = [];
  for (let i = 0; i < results?.length; i += chunkSize) {
    chunkedItems.push(results?.slice(i, i + chunkSize));
  }

  if (isEmpty(results) || isLoading) return null;

  return (
    <Box sx={{ px: { lg: 10, xl: 20 }, py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 1, sm: 1, md: 5, lg: 10, xl: 10 }
        }}
      >
        <Typography variant="h6" color="#fcde56" fontWeight={600}>
          Có thể bạn muốn xem
        </Typography>
        {/* <Link href="/phim-moi">
          <Typography variant="body2" color="#fcde56" sx={{ textDecoration: 'underline' }}>
            Xem thêm
          </Typography>
        </Link> */}
      </Box>
      <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible sx={{ px: { lg: 10, xl: 10 } }}>
        {chunkedItems.map((chunk, index) => (
          <Grid
            container
            key={index}
            spacing={{ xs: 1, sm: 1, md: 8, lg: 5, xl: 5 }}
            px={{ xs: 1, sm: 1, md: 5, lg: 0, xl: 0 }}
            py={1}
          >
            {chunk.map((item: any) => (
              <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2} key={item.id}>
                <MovieCard data={item} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
}

export default memo(SimilarMovies);