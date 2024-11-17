import { Typography, Grid } from '@mui/material';
import { FC, useState, SyntheticEvent, memo } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PhotoFormLoader from './PhotoFormLoader';
import { VideoFormLoader } from './VideoFormLoader';
import { IFile, FileType } from 'types/product';

interface IFileForm {
  imgTypeFiles: File[] | IFile[];
  videoTypeFiles: File[] | IFile[];
  setFiles: (files: File[], type: FileType) => void;
  deleteFiles: (type: FileType, index: number) => void;
  productName?: string;
}

const FileForm: FC<IFileForm> = ({ productName, imgTypeFiles, videoTypeFiles, setFiles, deleteFiles }) => {
  const [value, setValue] = useState<FileType>('image');
  const handleChange = (event: SyntheticEvent, newValue: FileType) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            Добавление медиа
          </Typography>
          {productName && (
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              {productName}
            </Typography>
          )}

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Фото" value="image" />
                  <Tab label="Видео" value="video" />
                  <Tab label="Видеообложка" value="3" />
                </TabList>
              </Box>
              <TabPanel sx={{ p: 0, pt: '20px' }} value="image">
                <PhotoFormLoader deleteFiles={deleteFiles} setFiles={setFiles} imgTypeFiles={imgTypeFiles} key={'photoFormLoader'} />
              </TabPanel>
              <TabPanel value="video" sx={{ p: 0, pt: '20px' }}>
                <VideoFormLoader deleteFiles={deleteFiles} setFiles={setFiles} videoTypeFiles={videoTypeFiles} />
              </TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(FileForm);
