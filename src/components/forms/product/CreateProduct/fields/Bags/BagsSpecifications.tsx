import { FC } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

interface PROPS {
  formik: any;
}

export const BagsSpecifications: FC<PROPS> = ({ formik }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Внешниий вид
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="size"
              name="size"
              //value={formik.values.weight}
              //onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
              label="Размер"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="styleRemen"
              name="styleRemen"
              label="Стиль ремешка"
              //value={formik.values.usage}
              //onChange={formik.handleChange}
              error={formik.touched.usage && Boolean(formik.errors.usage)}
              helperText={formik.touched.usage && formik.errors.usage}
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="mainColor"
              name="mainColor"
              label="Основной цвет"
              //value={formik.values.usage}
              //onChange={formik.handleChange}
              error={formik.touched.usage && Boolean(formik.errors.usage)}
              helperText={formik.touched.usage && formik.errors.usage}
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Упаковка
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Описание упаковки"
              //value={formik.values.top}
              //onChange={formik.handleChange}
              error={formik.touched.top && Boolean(formik.errors.top)}
              helperText={formik.touched.top && formik.errors.top}
              fullWidth
              multiline
              autoComplete="cc-number"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Информация о продукте
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Структура"
              //value={formik.values.top}
              //onChange={formik.handleChange}
              error={formik.touched.top && Boolean(formik.errors.top)}
              helperText={formik.touched.top && formik.errors.top}
              fullWidth
              multiline
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Защелка"
              //value={formik.values.top}
              //onChange={formik.handleChange}
              error={formik.touched.top && Boolean(formik.errors.top)}
              helperText={formik.touched.top && formik.errors.top}
              fullWidth
              multiline
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
              label="Длина ремня"
              //value={formik.values.features}
              //onChange={formik.handleChange}
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
              label="Текстура"
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
              id="category"
              name="category"
              label="Категория"
              //value={formik.values.category}
              //onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
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
        </Grid>
      </Grid>
    </>
  );
};
