import { Typography ,Box } from '@mui/material';
import Social from './Social';


export default function Hi () {
  return (
    <Box className='hi'>
      <Typography variant='h1'>
      Hi, I'm Adham 👋
      </Typography>
      <br />
      <Typography variant='body1'>
          I'm a front-end developer (React) with a passion for building fast, accessible, and visually stunning web applications. I love crafting responsive digital experiences that feel intuitive and look beautiful.My passion for the craft continues to grow every day.
      </Typography>
      <br />
      <Typography variant='h5'>
      📍 Egypt
      <br />
      🟢 Available for new projects
      </Typography>
      <Social/>
    </Box>
  );
}
