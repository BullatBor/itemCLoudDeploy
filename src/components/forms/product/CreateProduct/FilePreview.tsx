import { FC } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IFile } from 'types/product';

interface IFilePreview {
  type: 'image' | 'video';
  files: IFile[] | File[];
  deleteFile: (index: number, materialsIndex?: number) => void;
  title?: string;
  height?: number;
  materialsIndex?: number; //Индекс чтобы удалять картинки в Доп материалы
  stubsCount?: number;
}
export const FilePreview: FC<IFilePreview> = ({ type, files, title, height, materialsIndex, deleteFile, stubsCount = 0 }) => {
  const count = stubsCount > files.length ? stubsCount - files.length : 0;
  const stubsArray = Array.from({ length: count }, () => null);
  return (
    <>
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      {files.length > 0 && (
        <ImageList
          sx={{ width: 'fit-content', height: 'fit-content', display: 'flex', my: 0, flexWrap: 'wrap', gap: '8px' }}
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
                    width={70}
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
                  onClick={() => deleteFile(index, materialsIndex)}
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
      )}
      {stubsArray.length > 0 &&
        stubsArray.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 'fit-content',
              borderRadius: '10px',
              backgroundColor: '#D3D3D3',
              transition: '0.3s',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            <div style={{ width: '70px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhotoCamera sx={{ opacity: 0.5 }} />
            </div>
          </Box>
        ))}
    </>
  );
};
