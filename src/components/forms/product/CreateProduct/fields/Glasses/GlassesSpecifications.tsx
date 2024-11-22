import { FC } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

interface PROPS {
  formik: any;
}

export const GlassesSpecifications: FC<PROPS> = ({ formik }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Технические характеристики
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
              label="Материал оправы"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="styleRemen"
              name="styleRemen"
              label="Материал линзы"
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
          Информация о размере
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Ширина рамки"
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
              label="Длина ножки"
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
              label="Ширина линзы"
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
          Стиль
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Цвет линзы"
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
              label="Цвет оправы"
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
              label="Форма очков"
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
              label="Стиль рамки"
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
              label="Упаковка"
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
