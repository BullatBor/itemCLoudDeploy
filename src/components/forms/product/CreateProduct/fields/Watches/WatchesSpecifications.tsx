import { FC } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

interface PROPS {
  formik: any;
}

export const WatchesSpecifications: FC<PROPS> = ({ formik }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Ключевые параметры
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
              label="Диаметр циферблата"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="styleRemen"
              name="styleRemen"
              label="Материал ремешка"
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
              label="Материал корпуса"
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
          Особенности
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
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Застежка"
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
          Материалы
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="top"
              name="description"
              label="Стекло"
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
              label="Ремешок"
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
              label="Корпус"
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
          Внешний вид
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="features"
              name="features"
              label="Цвет циферблата"
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
              label="Форма циферблата"
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
              label=" Способ отображения"
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
              id="category"
              name="category"
              label=" Цвет корпуса"
              //value={formik.values.category}
              //onChange={formik.handleChange}
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
