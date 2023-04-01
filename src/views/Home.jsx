import {Typography} from '@mui/material';
import MediaTable from '../components/MediaTable';

const Home = () => {
  return (
    <>
      <Typography component="h1" variant="h2" my={3}>
        Home
      </Typography>
      <MediaTable />
    </>
  );
};

export default Home;
