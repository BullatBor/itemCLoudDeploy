import { FC } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { MySelect } from 'ui-component/Select/Select';
import { MATERIAL_DATA, OUTSOLE_MATERIAL_DATA } from '../../Constants';

interface PROPS {
  formik: any;
}
export const ShoesSpecifications: FC<PROPS> = ({ formik }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Характеристики
        </Typography>
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
        </Grid>
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
            <MySelect
              sx={{ width: '100%' }}
              id="sole"
              name="sole"
              label="Материал подошвы обуви"
              onChange={() => console.log('test')}
              options={OUTSOLE_MATERIAL_DATA}
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
            <MySelect
              sx={{ width: '100%' }}
              id="materials"
              name="materials"
              label="Материалы"
              onChange={() => console.log('test')}
              options={MATERIAL_DATA}
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
    </>
  );
};
