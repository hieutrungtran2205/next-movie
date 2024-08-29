'use client';

import { useQueryDetailMovie } from '@/common/api/movie/detail';
import { convertMinutesToHours } from '@/common/utils/helper';
import { Star } from '@mui/icons-material';
import { Box, Button, Rating, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Cast from './_components/cast';

function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = useQueryDetailMovie({ id });
  const { original_title, title, overview, release_date, backdrop_path, vote_count, vote_average, runtime, genres } =
    data || {};
  const runtimeText = convertMinutesToHours(runtime);
  const genresText = genres?.map((genre: any) => genre.name).join(', ');
  const rating = Number((vote_average / 2)?.toFixed(1)) || 5;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, sm: 300, md: 500, lg: 500, xl: 800 },
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
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
            zIndex: 1
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'end',
              gap: 2,
              padding: { xs: 1, md: 2, lg: 4 }
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="div"
                  color="#fff"
                  fontWeight={600}
                  sx={{ fontSize: { xs: 20, xl: 32 } }}
                >
                  {original_title} - {title} ({dayjs(release_date).format('YYYY')})
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Rating
                    name="read-only"
                    value={rating}
                    precision={0.5}
                    readOnly
                    icon={<Star sx={{ color: '#fcde56' }} />}
                    emptyIcon={<Star sx={{ color: '#aaa' }} />}
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body1" fontWeight={600} color="#fff">
                    {rating}
                  </Typography>
                  <Typography gutterBottom variant="body1" fontWeight={600} color="#fff">
                    {runtimeText}
                  </Typography>
                </Box>
                <Typography gutterBottom variant="body1" component="div" color="#fff">
                  {overview}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" fontWeight={600} color="#fff">
                  Thể loại: {''}
                </Typography>
                <Typography component="span" color="#fff">
                  {genresText}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" color="success" sx={{ width: 'fit-content' }}>
                  Xem ngay
                </Button>
                <Button variant="contained" color="error" sx={{ width: 'fit-content' }}>
                  Trailer
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              {/* <Videos id={id} /> */}
              <Cast id={id} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailPage;
