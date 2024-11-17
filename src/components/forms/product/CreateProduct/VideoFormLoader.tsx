import { Typography, Grid } from '@mui/material';
import { FC } from 'react';
import FileLoader from 'ui-component/fileLoader';
import { FilePreview } from './FilePreview';
import { IFile, FileType } from 'types/product';

interface IVideoFormLoader {
  videoTypeFiles: IFile[] | File[];
  setFiles: (files: File[], type: FileType) => void;
  deleteFiles: (type: FileType, index: number) => void;
}

export const VideoFormLoader: FC<IVideoFormLoader> = ({ videoTypeFiles, setFiles, deleteFiles }) => {
  const fileHandler = (videoTypeFiles: File[]) => {
    setFiles(videoTypeFiles, 'video');
  };

  const previewHandler = (index: number) => {
    deleteFiles('video', index);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Загрузка видео
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Покажите преимущества товара или как его использовать. Карточки с видео привлекательнее для покупателей: посмотреть ролик проще, чем
        прочитать описание{' '}
      </Typography>
      <Grid item>
        <FileLoader type="video" setValue={fileHandler} />
      </Grid>
      <FilePreview deleteFile={previewHandler} title="Видео товара" type="video" files={videoTypeFiles} height={120} />
    </>
  );
};
