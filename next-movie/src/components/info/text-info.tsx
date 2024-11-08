import { useQueryDetailMovie } from '@/api/movie/detail';
import { convertMinutesToHours } from '@/utils/helper';
import { Star, VisibilityOutlined } from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';
import dayjs from 'dayjs';

function TextInfo({ id }: { id: string }) {
  const { data } = useQueryDetailMovie(id);
  const {
    original_title,
    title,
    overview,
    release_date,
    vote_count,
    vote_average,
    runtime,
    genres,
    production_countries,
    spoken_languages
  } = data || {};
  const runtimeText = convertMinutesToHours(runtime);
  const genresText = genres?.map((genre: any) => genre.name).join(', ');
  const productionCountriesText = production_countries?.map((country: any) => country.name).join(', ');
  const spokenLanguagesText = spoken_languages?.map((language: any) => language.english_name).join(', ');
  const rating = Number((vote_average / 2)?.toFixed(1)) || 5;
  const releaseDateText = dayjs(release_date).format('DD/MM/YYYY');

  return (
    <>
      <Box>
        <Typography variant="h4" component="div" color="#fff" fontWeight={600} sx={{ fontSize: { xs: 28, xl: 48 } }}>
          {original_title} - {title} ({dayjs(release_date).format('YYYY')})
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, xl: 1.5 }, mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <VisibilityOutlined sx={{ color: '#fff' }} />
            <Typography variant="body1" fontWeight={600} color="#fff">
              {vote_count}
            </Typography>
          </Box>
          <Typography variant="body1" color="#fff">
            |
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating
              name="read-only"
              value={rating}
              precision={0.5}
              readOnly
              icon={<Star sx={{ color: '#fcde56' }} />}
              emptyIcon={<Star sx={{ color: '#aaa' }} />}
            />
            <Typography variant="body1" fontSize={20} fontWeight={600} color="#fff">
              {rating}
            </Typography>
          </Box>
          <Typography variant="body1" color="#fff">
            |
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body1" fontWeight={600} color="#fff">
              {runtimeText}
            </Typography>
          </Box>
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
      <Box>
        <Typography component="span" fontWeight={600} color="#fff">
          Quốc gia: {''}
        </Typography>
        <Typography component="span" color="#fff">
          {productionCountriesText}
        </Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600} color="#fff">
          Ngôn ngữ: {''}
        </Typography>
        <Typography component="span" color="#fff">
          {spokenLanguagesText}
        </Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600} color="#fff">
          Ngày công chiếu: {''}
        </Typography>
        <Typography component="span" color="#fff">
          {releaseDateText}
        </Typography>
      </Box>
      {/* <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" color="success" sx={{ width: 'fit-content' }}>
                  Xem ngay
                </Button>
                <Button variant="contained" color="error" sx={{ width: 'fit-content' }}>
                  Trailer
                </Button>
              </Box> */}
    </>
  );
}

export default TextInfo;
