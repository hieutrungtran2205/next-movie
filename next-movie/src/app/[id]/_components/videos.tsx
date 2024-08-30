'use client';

import { useQueryMovieVideos } from '@/common/api/movie/videos';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

function Videos({ id }: { id: string }) {
  const { data } = useQueryMovieVideos({ id });
  const { results } = data || {};

  const chunkSize = 4;
  const chunkedItems = [];
  for (let i = 0; i < results?.length; i += chunkSize) {
    chunkedItems.push(results?.slice(i, i + chunkSize));
  }

  return (
    <Carousel sx={{ minHeight: 100, px: 10 }} autoPlay={false} indicators={false} navButtonsAlwaysVisible>
      {chunkedItems.map((chunk, index) => (
        <Grid key={index} container>
          {chunk.map((item: any) => (
            <Grid md={3} lg={3} xl={3} key={item.id}>
              <Image
                width={150}
                height={100}
                className="trailer-img"
                alt={item.key}
                // src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                src={`/images/logo.png`}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

export default Videos;
