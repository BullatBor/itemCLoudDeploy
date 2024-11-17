import Box from '@mui/material/Box';
import { FC } from 'react';
import Dropzone from 'react-dropzone';
import { FILE_TYPE } from './Constants';
import Typography from '@mui/material/Typography';

interface IFileLoader {
  type: 'image' | 'video';
  setValue: (value: File[]) => void;
}

const FileLoader: FC<IFileLoader> = ({ type, setValue }) => {
  return (
    <Dropzone accept={FILE_TYPE[type]} onDrop={(acceptedFiles) => setValue(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <Box
          sx={{
            width: '100%',
            border: '1px dashed grey',
            borderRadius: '10px',
            '&:hover': {
              border: '1px dashed blue',
              cursor: 'pointer'
            }
          }}
        >
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography sx={{ py: '40px' }}>Выберите или перетащите файлы в эту область</Typography>
          </div>
        </Box>
      )}
    </Dropzone>
  );
};

export default FileLoader;
