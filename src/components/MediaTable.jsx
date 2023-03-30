import {ImageList} from '@mui/material';
import {useMedia} from '../hooks/apiHooks';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const {mediaArray} = useMedia();

  return (
    <ImageList variant="masonry" cols={3} gap={25}>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
    </ImageList>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
