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
      <Typography variant="h5" gutterBottom>
        Загрузка фото
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Выбирайте качественные снимки, покажите товар со всех ракурсов - это поможет выделить товар среди других.
      </Typography>
      <Grid item>
        <FileLoader type="image" setValue={fileHandler} />
      </Grid>
      <FilePreview deleteFile={previewHandler} title="Фото товара" files={imgTypeFiles} type="image" />
    </>
  );
};

export default PhotoFormLoader;
