import { Typography, Grid } from '@mui/material';
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import PhotoFormLoader from './PhotoFormLoader';
import { IFile, FileType } from 'types/product';

interface IFileForm {
  imgTypeFiles: File[] | IFile[];
  videoTypeFiles: File[] | IFile[];
  setFiles: (files: File[], type: FileType) => void;
  deleteFiles: (type: FileType, index: number) => void;
  productName?: string;
}

const FileForm: FC<IFileForm> = ({ productName, imgTypeFiles, videoTypeFiles, setFiles, deleteFiles }) => {
  return (
    <Grid item xs={12}>
      <Grid item xs={12} sx={{ border: '1px grey solid', borderRadius: '10px', px: '14px', py: '15px' }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Добавление медиа
        </Typography>
        {productName && (
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            {productName}
          </Typography>
        )}

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <PhotoFormLoader deleteFiles={deleteFiles} setFiles={setFiles} imgTypeFiles={imgTypeFiles} key={'photoFormLoader'} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(FileForm);
