import { useQueryMovieCredits } from '@/common/api/movie/credits';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import Carousel from 'react-material-ui-carousel';

function Cast({ id }: { id: string }) {
  const { data } = useQueryMovieCredits({ id });
  const { cast } = data || {};

  const chunkSize = 6;
  const chunkedItems = [];
  for (let i = 0; i < cast?.length; i += chunkSize) {
    chunkedItems.push(cast?.slice(i, i + chunkSize));
  }

  if (isEmpty(cast)) return null;

  return (
    <Carousel sx={{ minHeight: 150, px: 10 }} autoPlay={false} indicators={false} navButtonsAlwaysVisible>
      {chunkedItems.map((chunk, index) => (
        <Grid key={index} container justifyContent="center" rowGap={{ xs: 1, xl: 0 }}>
          {chunk.map((item: any) => (
            <Grid xs={6} md={2} lg={2} xl={2} key={item.id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: { xs: 0, xl: 1 }
                }}
              >
                <Avatar
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/w138_and_h175_face${item.profile_path}`}
                  alt={item.original_name}
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="body1" sx={{ color: '#fff' }} fontSize={{ xs: 12, xl: 16 }}>
                    {item.original_name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc' }} fontSize={{ xs: 12, xl: 16 }}>
                    {item.character}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

export default Cast;
