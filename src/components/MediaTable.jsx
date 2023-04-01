import {ImageList} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const {mediaArray} = useMedia();
  const windowSize = useWindowSize();

  return (
    <ImageList variant="masonry" cols={windowSize.width > 768 ? 3 : 2} gap={0}>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
    </ImageList>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
