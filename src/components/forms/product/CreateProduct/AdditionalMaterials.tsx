import { FC } from 'react';
import { FilePreview } from './FilePreview';
import FileLoader from 'ui-component/fileLoader';
import { Button, IconButton, Grid, Stack, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AnimateButton from 'ui-component/extended/AnimateButton';

interface PROPS {
  formik: any;
}

export const AdditionalMaterials: FC<PROPS> = ({ formik }) => {
  const deleteImage = (imageIndex: number, materialsIndex?: number) => {
    if (materialsIndex !== undefined) {
      const newArr = formik.values.additionalMaterials[materialsIndex].image.filter((_: unknown, index: number) => index !== imageIndex);
      formik.setFieldValue(`additionalMaterials[${materialsIndex}].image`, newArr);
    }
  };

  const removeMaterials = (index: number) => {
    formik.setFieldValue(
      'additionalMaterials',
      formik.values.additionalMaterials.filter((_: unknown, i: number) => i !== index)
    );
  };
  const addMaterials = () => {
    formik.setFieldValue('additionalMaterials', [
      ...formik.values.additionalMaterials,
      {
        description: '',
        image: []
      }
    ]);
  };
  const fileHandler = (imgTypeFiles: File[], materialsIndex?: number) => {
    if (materialsIndex !== undefined) {
      formik.setFieldValue(`additionalMaterials[${materialsIndex}].image`, [
        ...formik.values.additionalMaterials[materialsIndex].image,
        ...imgTypeFiles
      ]);
    }
  };
  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Дополнительные материалы
      </Typography>

      {formik.values.additionalMaterials.length ? (
        formik.values.additionalMaterials.map((_: unknown, index: number) => {
          return (
            <Grid key={index} item xs={12} sx={{ border: '1px #D3D3D3 solid', borderRadius: '10px', px: '14px', py: '15px' }}>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '4px' }}>
                  <FilePreview
                    materialsIndex={index}
                    deleteFile={deleteImage}
                    files={formik.values.additionalMaterials[index].image || []} //Костыль
                    type="image"
                    stubsCount={1}
                  />
                  <FileLoader materialsIndex={index} type="image" setValue={fileHandler} />
                </Grid>
                <Stack display="flex" flexDirection="row">
                  <TextField
                    id="description"
                    label="Доп материал"
                    fullWidth
                    autoComplete="shipping address-line2"
                    {...formik.getFieldProps(`additionalMaterials[${index}].text`)}
                  />
                  <IconButton aria-label="delete" onClick={() => removeMaterials(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="body2">{'Ничего нет'}</Typography>
        </Stack>
      )}
      <Stack direction="row" justifyContent="flex-end">
        <AnimateButton>
          <Button variant="contained" sx={{ my: 3, ml: 1 }} type="button" onClick={addMaterials}>
            Добавить
          </Button>
        </AnimateButton>
      </Stack>
    </Grid>
  );
};
