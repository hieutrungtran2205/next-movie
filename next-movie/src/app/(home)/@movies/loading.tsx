import { Grid, Skeleton } from '@mui/material';

function Loading() {
  return (
    <Grid container spacing={{ xs: 1, sm: 1, md: 5, lg: 5, xl: 5 }} px={{ xs: 1, sm: 1, md: 5, lg: 20, xl: 30 }} py={2}>
      <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2}>
        <Skeleton variant="rectangular" height={250} sx={{ backgroundColor: '#344047', borderRadius: 1 }} />
        <Skeleton sx={{ backgroundColor: '#344047' }} />
        <Skeleton width="60%" sx={{ backgroundColor: '#344047' }} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2}>
        <Skeleton variant="rectangular" height={250} sx={{ backgroundColor: '#344047', borderRadius: 1 }} />
        <Skeleton sx={{ backgroundColor: '#344047' }} />
        <Skeleton width="60%" sx={{ backgroundColor: '#344047' }} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2}>
        <Skeleton variant="rectangular" height={250} sx={{ backgroundColor: '#344047', borderRadius: 1 }} />
        <Skeleton sx={{ backgroundColor: '#344047' }} />
        <Skeleton width="60%" sx={{ backgroundColor: '#344047' }} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2}>
        <Skeleton variant="rectangular" height={250} sx={{ backgroundColor: '#344047', borderRadius: 1 }} />
        <Skeleton sx={{ backgroundColor: '#344047' }} />
        <Skeleton width="60%" sx={{ backgroundColor: '#344047' }} />
      </Grid>
    </Grid>
  );
}

export default Loading;
