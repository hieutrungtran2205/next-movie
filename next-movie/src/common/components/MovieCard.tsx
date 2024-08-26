import { Box, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';

function MovieCard(props: any) {
  const { data } = props;
  const { original_title, title, release_date, poster_path } = data || {};
  return (
    <Box>
      <CardMedia sx={{ height: 280 }} image={`https://image.tmdb.org/t/p/w400/${poster_path}`} />
      <Typography gutterBottom variant="h6" component="div" color="#fff">
        {original_title} - {title} ({dayjs(release_date).format('YYYY')})
      </Typography>
    </Box>
  );
}

export default MovieCard;
