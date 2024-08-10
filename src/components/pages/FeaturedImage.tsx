import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface FeaturedImageProps {
  post: {
    description?: string;
    image: string;
    imageText: string;
    title?: string;
    credit: String;
  };
  main: boolean
}

export default function FeaturedImage(props: FeaturedImageProps) {
  const { post, main } = props;

  let height = "60vh"
  if (!main) {
    height = "30vh"
  }


  return (
    <Paper
      sx={{
        position: 'relative',
        height: {height},
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 5,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      {post.title && (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
          height: '100%',
          flex: 1
        }}
      />
      )}
      {post.title && (
        <div style={{display: 'flex', flexDirection: 'column', height: "100%"}}>
          <div id="hi" style={{flex: 1}}>
          <Grid container direction="row" justifyContent="center">
          <Grid item xs={12} sm={11} md={11} lg={10} xl={9}>
            <Box
              sx={{
                position: 'relative',
                pt: { xs: 3, sm: 10 },
                px: { xs: 1, sm: 0 },
                flexGrow: 1, // This allows the Box to take up the remaining space
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography component="h1" variant="h1" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h4" color="inherit" paragraph>
                {post.description}
              </Typography>
            </Box>
          </Grid>
          
          </Grid>

          </div>
          <div style={{height: '1.25rem'}}>
              <Typography align="right" pr={1} sx={{ fontSize: '0.75rem' }}>
              {post.credit}
            </Typography>
          </div>
        </div>
      )}
      
    </Paper>
  );
}