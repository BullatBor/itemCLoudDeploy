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
        width: { xs: '100%', sm: '200px' },
        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
        borderRadius: '10px',
        border: '1px solid',
        px: '5px',
        py: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '8px', sm: '16px' }
      }}
    >
      <Grid item>
        <Typography variant="h3" gutterBottom sx={{ mb: { xs: '5px', sm: '8px' }, fontSize: { xs: '12px' } }}>
          {name}
        </Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
        <img width={150} height={70} src={image || ''} alt={name || 'shoes'} />
      </Grid>
      <Grid item>
        <Typography sx={{ color: 'grey', fontSize: { xs: '12px', fontWeight: { xs: 400, sm: 500 } } }}>
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
