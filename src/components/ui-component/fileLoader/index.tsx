import Box from '@mui/material/Box';
import { FC } from 'react';
import Dropzone from 'react-dropzone';
import { FILE_TYPE } from './Constants';
import AddIcon from '@mui/icons-material/Add';

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
            width: 'fit-content',
            borderRadius: '10px',
            backgroundColor: '#D3D3D3',
            transition: '0.3s',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: '#C0C0C0'
            }
          }}
        >
          <div
            style={{ width: '70px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <AddIcon color="secondary" />
          </div>
        </Box>
      )}
    </Dropzone>
  );
};

export default FileLoader;
