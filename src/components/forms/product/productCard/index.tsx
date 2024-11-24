import { Grid, Typography, Button, Stack } from '@mui/material';
import { IProductInfo } from 'types/product';
import { FC } from 'react';

interface IProductCardInfo extends IProductInfo {
  onClick: () => void;
}

const ProductCard: FC<IProductCardInfo> = ({ name, brand, description, image, onClick }) => {
  return (
    <Grid
      item
      sx={{
        width: 200,
        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
        borderRadius: '10px',
        border: '1px solid',
        px: '5px',
        py: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Grid item>
        <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
          {name}
        </Typography>
      </Grid>
      <Grid item sx={{display: 'flex', justifyContent: 'center'}}>
        <img width={150} height={70} src={image || ''} alt={name || 'shoes'} />
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={{ color: 'grey' }}>
          {description}
        </Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
        <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h5" sx={{}}>
            {brand}
          </Typography>
          <Button variant="contained" color="error" size="small" type="button" onClick={onClick}>
            Удалить
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
