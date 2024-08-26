"use client";

import { useQueryMovies } from "@/common/api/list";
import MovieCard from "@/common/components/MovieCard";
import { Grid } from "@mui/material";
import { memo } from "react";
import Loading from "./loading";

function HomePage() {
  const { data, isLoading } = useQueryMovies();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 5, lg: 5 }}
      px={{ xs: 1, sm: 1, md: 5, lg: 20 }}
      py={4}
    >
      {data?.results?.map((movie: any) => (
        <Grid item xs={6} sm={6} md={4} lg={2.4} key={movie.id}>
          <MovieCard data={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(HomePage);
