import { Typography, Grid } from '@mui/material';
import { FC } from 'react';
import FileLoader from 'ui-component/fileLoader';
import { FilePreview } from './FilePreview';
import { IFile, FileType } from 'types/product';

interface IPhotoFormLoader {
  imgTypeFiles: File[] | IFile[];
  setFiles: (files: File[], type: FileType) => void;
  deleteFiles: (type: FileType, index: number) => void;
}
const PhotoFormLoader: FC<IPhotoFormLoader> = ({ imgTypeFiles, setFiles, deleteFiles }) => {
  const fileHandler = (imgTypeFiles: File[]) => {
    setFiles(imgTypeFiles, 'image');
  };
  const previewHandler = (index: number) => {
    deleteFiles('image', index);
  };
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Выбирайте качественные снимки, покажите товар со всех ракурсов - это поможет выделить товар среди других.
      </Typography>
      <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '4px' }}>
        <FilePreview deleteFile={previewHandler} files={imgTypeFiles} type="image" stubsCount={1} />
        <FileLoader type="image" setValue={fileHandler} />
      </Grid>
    </>
  );
};

export default PhotoFormLoader;
