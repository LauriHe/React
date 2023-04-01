import {
  Avatar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/variables';

const Profile = () => {
  const {user} = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/320',
  });
  const {getTag} = useTag();

  const fetchAvatar = async () => {
    try {
      if (user) {
        const avatars = await getTag('avatar_' + user.user_id);
        const ava = avatars.pop();
        ava.filename = mediaUrl + ava.filename;
        setAvatar(ava);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  return (
    <Grid container direction="column" alignItems="center" my={3}>
      <Card sx={{width: '50%'}}>
        {user && (
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar sx={{width: '100%'}}>
                  <Avatar
                    variant="square"
                    src={
                      avatar ? avatar.filename : 'https://placekitten.com/320'
                    }
                    imgProps={{
                      alt: `${user.username}'s profile image`,
                    }}
                    sx={{width: '100%', height: '30vh'}}
                  />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText primary={'Username: ' + user.username} />
              </ListItem>
              <ListItem>
                {' '}
                <ListItemText primary={'Email: ' + user.email} />
              </ListItem>
              <ListItem>
                {' '}
                <ListItemText primary={'Full name: ' + user.full_name} />
              </ListItem>
              <ListItem>
                {' '}
                <ListItemText primary={'User id: ' + user.user_id} />
              </ListItem>
            </List>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default Profile;
