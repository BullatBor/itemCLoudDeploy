// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { MySelect } from 'ui-component/Select/Select';
import { SIZE_DATA, SIZE_COUNRY_DATA } from './Constants';
import { IProductInfo } from './types';

const validationSchema = yup.object({
  // TODO: ожидаем ТЗ
});

interface AddressFormProps {
  shippingData: IProductInfo;
  setShippingData: (d: IProductInfo) => void;
  handleNext: () => void;
  setErrorIndex: (i: number | null) => void;
}

const ProductInfoForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }: AddressFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: shippingData.name ?? '',
      brand: shippingData.brand ?? '',
      size: 34,
      sizeCountry: 'us',
      description: '',
      additionalMaterials: []
    },
    validationSchema,
    onSubmit: (values) => {
      setShippingData({
        ...values,
        size: String(values.size)
      });
      handleNext();
    }
  });

  const addMaterials = () => {
    formik.setFieldValue('additionalMaterials', [...formik.values.additionalMaterials, '']);
  };

  const removeMaterials = (index: number) => {
    formik.setFieldValue(
      'additionalMaterials',
      formik.values.additionalMaterials.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Информация о товаре
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              name="name"
              label="Название *"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="brand"
              name="brand"
              label="Брэнд *"
              value={formik.values.brand}
              onChange={formik.handleChange}
              error={formik.touched.brand && Boolean(formik.errors.brand)}
              helperText={formik.touched.brand && formik.errors.brand}
              fullWidth
              autoComplete="family-name"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Размер
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <MySelect
                  id="size"
                  label={'Размер'}
                  name={'size'}
                  value={String(formik.values.size)}
                  onChange={formik.handleChange}
                  options={SIZE_DATA}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MySelect
                  id="sizeCountry"
                  label={'Страна'}
                  name={'sizeCountry'}
                  value={formik.values.sizeCountry}
                  onChange={formik.handleChange}
                  options={SIZE_COUNRY_DATA}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Описание товара
            </Typography>
            <TextField id="description" name="description" label="Описание" multiline fullWidth autoComplete="shipping address-line2" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Дополнительные материалы
            </Typography>

            {formik.values.additionalMaterials.length ? (
              <Grid container spacing={2}>
                {formik.values.additionalMaterials.map((_, index) => {
                  return (
                    <Grid key={index} item xs={12}>
                      <Stack direction="row" alignItems="center" justifyContent="flex-end">
                        <TextField
                          id="description"
                          label="Доп материал"
                          fullWidth
                          autoComplete="shipping address-line2"
                          {...formik.getFieldProps(`additionalMaterials[${index}]`)}
                        />
                        <IconButton aria-label="delete" onClick={() => removeMaterials(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
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
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Сопутствующие товары
            </Typography>
            <TextField id="description" name="description" label="Описание" multiline fullWidth autoComplete="shipping address-line2" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Товары из одной коллекции
            </Typography>
            <TextField id="description" name="description" label="Описание" multiline fullWidth autoComplete="shipping address-line2" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Товары такой же модели
            </Typography>
            <TextField id="description" name="description" label="Описание" multiline fullWidth autoComplete="shipping address-line2" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProductInfoForm;
