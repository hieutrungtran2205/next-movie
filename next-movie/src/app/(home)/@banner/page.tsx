"use client";

import { useQueryMovies } from "@/common/api/list";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import Carousel from "react-material-ui-carousel";
import Loading from "../@list/loading";

function Page() {
  const { data, isLoading } = useQueryMovies();
  const { results } = data || {};

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ paddingX: 20 }}>
      <Carousel>
        {results?.slice(0, 5).map((item: any) => {
          const {
            original_title,
            title,
            overview,
            release_date,
            backdrop_path,
          } = item || {};
          return (
            <Box
              sx={{
                position: "relative",
                height: { lg: 500 },
                width: "100%",
                borderRadius: 3,
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                overlay: 0.5,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  borderRadius: 3,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    width: 1 / 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingX: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      color="#fff"
                    >
                      {original_title} - {title} (
                      {dayjs(release_date).format("YYYY")})
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      color="#fff"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {overview}
                    </Typography>
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
