import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { IFile } from 'types/product';

interface IFilePreview {
  type: 'image' | 'video';
  files: IFile[] | File[];
  title?: string;
  height?: number;
  deleteFile: (index: number) => void;
}

export const FilePreview: FC<IFilePreview> = ({ type, files, title, height, deleteFile }) => {
  return (
    <Grid item xs={12} sx={{ mt: '24px' }}>
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      <ImageList
        sx={{ width: '100%', height: 'fit-content', display: 'flex', flexWrap: 'wrap', gap: '8px' }}
        cols={6}
        rowHeight={height || 90}
      >
        {files.map((item, index) => {
          const isFileBlob = item instanceof File;
          return (
            <ImageListItem key={item.name} sx={{ position: 'relative' }}>
              {type === 'image' ? (
                <Image
                  src={!isFileBlob ? item.url : URL.createObjectURL(item)}
                  alt={item.name}
                  width={90}
                  height={90}
                  loading="lazy"
                  style={{ flexGrow: 'inherit', border: '1px solid grey', borderRadius: '8px' }}
                />
              ) : (
                <video width="200" height={`100%`} controls>
                  <source src={!isFileBlob ? item.url : URL.createObjectURL(item)} type={item.type} />
                  Ваш браузер не поддерживает тег video.
                </video>
              )}

              <Box
                onClick={() => deleteFile(index)}
                sx={{
                  position: 'absolute',
                  right: '2px',
                  top: '5px',
                  cursor: 'pointer',
                  borderRadius: '100%'
                }}
              >
                <DeleteForeverOutlinedIcon />
              </Box>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Grid>
  );
};
