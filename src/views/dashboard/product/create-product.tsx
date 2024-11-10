'use client';

import ProductCreateForm from 'components/forms/product/CreateProduct';

import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

const CreateProduct = () => {
  return (
    <Grid container spacing={gridSpacing} justifyContent={'center'}>
      <Grid item xs={7}>
        <ProductCreateForm />
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
