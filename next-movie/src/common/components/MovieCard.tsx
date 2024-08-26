import { Box, CardMedia, Typography } from "@mui/material";
import dayjs from "dayjs";

function MovieCard(props: any) {
  const { data } = props;
  const { original_title, title, release_date, poster_path } = data || {};
  return (
    <Box>
      <CardMedia
        sx={{ height: { xs: 280, sm: 280, md: 280, lg: 300 } }}
        image={`https://image.tmdb.org/t/p/w400${poster_path}`}
        style={{ borderRadius: 12 }}
      />
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        color="#fff"
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {original_title} - {title}
      </Typography>
      {/* <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <img width={32} src="/images/imdb.svg" alt="" />
          <Typography>{dayjs(release_date).format("YYYY")}</Typography>
        </Box>
        <Typography>{dayjs(release_date).format("YYYY")}</Typography>
      </Box> */}
    </Box>
  );
}

export default MovieCard;
