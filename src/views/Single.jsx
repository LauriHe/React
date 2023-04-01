import {Card, CardMedia, Grid, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const {state} = useLocation();
  const file = state.file;

  return (
    <Grid container direction="column" alignItems="center">
      <Typography component="h1" variant="h3" my={3}>
        {file.title}
      </Typography>
      <Card sx={{maxWidth: '50%'}}>
        <CardMedia
          component={'img'}
          src={mediaUrl + file.filename}
          title={file.title}
        />
      </Card>
    </Grid>
  );
};

// TODO in the next task: add propType for location

export default Single;
