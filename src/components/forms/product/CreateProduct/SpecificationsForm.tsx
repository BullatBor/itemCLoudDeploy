// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ISpecifications } from './types';

const validationSchema = yup.object({
  /*TODO: Ждать ТЗ */
});

interface PaymentFormProps {
  paymentData: ISpecifications;
  setPaymentData: (d: ISpecifications) => void;
  handleNext: () => void;
  handleBack: () => void;
  setErrorIndex: (i: number | null) => void;
}

export default function PaymentForm({ paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }: PaymentFormProps) {
  const formik = useFormik({
    initialValues: {
      weight: '',
      usage: '',
      top: '',
      sole: '',
      features: '',
      lacingMode: '',
      soleType: '',
      sockType: '',
      mainColor: '',
      height: '',
      season: '',
      article: '',
      officialPrice: '',
      releaseDate: '',
      set: '',
      materials: '',
      style: '',
      category: ''
    },
    validationSchema,
    onSubmit: (values) => {
      setPaymentData({
        ...values
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Характеристики
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="weight"
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
              label="Вес"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="usage"
              name="usage"
              label="Применение"
              value={formik.values.usage}
              onChange={formik.handleChange}
              error={formik.touched.usage && Boolean(formik.errors.usage)}
              helperText={formik.touched.usage && formik.errors.usage}
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Технологии
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="top"
                  name="top"
                  label="Верх"
                  value={formik.values.top}
                  onChange={formik.handleChange}
                  error={formik.touched.top && Boolean(formik.errors.top)}
                  helperText={formik.touched.top && formik.errors.top}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="sole"
                  name="sole"
                  label="Подошва"
                  value={formik.values.sole}
                  onChange={formik.handleChange}
                  error={formik.touched.sole && Boolean(formik.errors.sole)}
                  helperText={formik.touched.sole && formik.errors.sole}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Параметры
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="features"
                  name="features"
                  label="Особенности"
                  value={formik.values.features}
                  onChange={formik.handleChange}
                  error={formik.touched.features && Boolean(formik.errors.features)}
                  helperText={formik.touched.features && formik.errors.features}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="lacingMode"
                  name="lacingMode"
                  label="Режим шнуровки"
                  value={formik.values.lacingMode}
                  onChange={formik.handleChange}
                  error={formik.touched.lacingMode && Boolean(formik.errors.lacingMode)}
                  helperText={formik.touched.lacingMode && formik.errors.lacingMode}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="soleType"
                  name="soleType"
                  label="Тип подошвы"
                  value={formik.values.soleType}
                  onChange={formik.handleChange}
                  error={formik.touched.soleType && Boolean(formik.errors.soleType)}
                  helperText={formik.touched.soleType && formik.errors.soleType}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="sockType"
                  name="sockType"
                  label="Тип носка"
                  value={formik.values.sockType}
                  onChange={formik.handleChange}
                  error={formik.touched.sockType && Boolean(formik.errors.sockType)}
                  helperText={formik.touched.sockType && formik.errors.sockType}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="mainColor"
                  name="mainColor"
                  label="Основной цвет"
                  value={formik.values.mainColor}
                  onChange={formik.handleChange}
                  error={formik.touched.mainColor && Boolean(formik.errors.mainColor)}
                  helperText={formik.touched.mainColor && formik.errors.mainColor}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="height"
                  name="height"
                  label="Высота"
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  helperText={formik.touched.height && formik.errors.height}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="season"
                  name="season"
                  label="Сезон"
                  value={formik.values.season}
                  onChange={formik.handleChange}
                  error={formik.touched.season && Boolean(formik.errors.season)}
                  helperText={formik.touched.season && formik.errors.season}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="article"
                  name="article"
                  label="Артикул"
                  value={formik.values.article}
                  onChange={formik.handleChange}
                  error={formik.touched.article && Boolean(formik.errors.article)}
                  helperText={formik.touched.article && formik.errors.article}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="officialPrice"
                  name="officialPrice"
                  label="Официальная цена"
                  value={formik.values.officialPrice}
                  onChange={formik.handleChange}
                  error={formik.touched.officialPrice && Boolean(formik.errors.officialPrice)}
                  helperText={formik.touched.officialPrice && formik.errors.officialPrice}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="releaseDate"
                  name="releaseDate"
                  label="Дата выхода"
                  value={formik.values.releaseDate}
                  onChange={formik.handleChange}
                  error={formik.touched.releaseDate && Boolean(formik.errors.releaseDate)}
                  helperText={formik.touched.releaseDate && formik.errors.releaseDate}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="set"
                  name="set"
                  label="Комплект"
                  value={formik.values.set}
                  onChange={formik.handleChange}
                  error={formik.touched.set && Boolean(formik.errors.set)}
                  helperText={formik.touched.set && formik.errors.set}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="materials"
                  name="materials"
                  label="Материалы"
                  value={formik.values.materials}
                  onChange={formik.handleChange}
                  error={formik.touched.materials && Boolean(formik.errors.materials)}
                  helperText={formik.touched.materials && formik.errors.materials}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="style"
                  name="style"
                  label="Стиль"
                  value={formik.values.style}
                  onChange={formik.handleChange}
                  error={formik.touched.style && Boolean(formik.errors.style)}
                  helperText={formik.touched.style && formik.errors.style}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="category"
                  name="category"
                  label="Категория"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Back
              </Button>
              <AnimateButton>
                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
