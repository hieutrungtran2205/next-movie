'use client';

import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Carousel from 'react-material-ui-carousel';
import Loading from '../@list/loading';
import { useQueryNowPlaying } from '@/common/api/movie/list';

function Page() {
  const { data, isLoading } = useQueryNowPlaying();
  const { results } = data || {};

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ paddingX: { xs: 1, sm: 1, md: 5, lg: 20, xl: 20 } }}>
      <Carousel interval={5000}>
        {results?.slice(0, 5).map((item: any) => {
          const { id, original_title, title, overview, release_date, backdrop_path, vote_count, vote_average } =
            item || {};
          return (
            <Box
              key={id}
              sx={{
                position: 'relative',
                height: { xs: 350, lg: 500, xl: 600 },
                width: '100%',
                borderRadius: 3,
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                overlay: 0.5,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  borderRadius: 3,
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))'
                }
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  top: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 3,
                  zIndex: 1,
                  color: '#fff'
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', lg: '50%', xl: '50%' },
                    height: '100%',
                    display: 'flex',
                    alignItems: 'end',
                    padding: { xs: 1, md: 2, lg: 4 }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1
                    }}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        color="#fff"
                        fontWeight={600}
                        sx={{ fontSize: { xs: 20, xl: 32 } }}
                      >
                        {original_title} - {title} ({dayjs(release_date).format('YYYY')})
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        color="#fff"
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: { xs: 3, lg: 3, xl: 5 },
                          fontSize: { xs: 14, xl: 16 }
                        }}
                      >
                        {overview}
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={600}>
                      Lượt xem: {vote_count} - Đánh giá: {vote_average.toFixed(1)}/10
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="contained" color="success" sx={{ width: 'fit-content' }}>
                        Xem ngay
                      </Button>
                      <Button variant="contained" color="error" sx={{ width: 'fit-content' }}>
                        Trailer
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default Page;
