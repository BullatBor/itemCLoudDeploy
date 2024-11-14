import { FC } from 'react';

// material-ui
import { List, ListItem, ListItemText, Typography, Stack } from '@mui/material';
import { IProductInfo, ISpecifications } from 'types/product';
import { SHOES_SPECIFICATION_RU, SHOES_INFO_RU } from './Constants';

interface PROPS {
  productionInfo: IProductInfo;
  specifications: ISpecifications;
}

export const Review: FC<PROPS> = ({ productionInfo, specifications }) => {
  const productionInfoArray = Object.entries(productionInfo).filter((product) => {
    if (Array.isArray(product[1]) || product[0] === 'id') {
      return false;
    }
    return true;
  });
  const specificationsArray = Object.entries(specifications);
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Информация о продукте
      </Typography>
      <List disablePadding>
        {productionInfoArray.map((product, index) => (
          <ListItem sx={{ py: 1, px: 0 }} key={index}>
            <ListItemText primary={SHOES_INFO_RU[product[0] as string]} />
            <Typography variant="body2">{product[1] || 'Нет информации'}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Дополнительные материалы
      </Typography>
      {productionInfo.additionalMaterials && productionInfo.additionalMaterials.length > 0 ? (
        <List disablePadding>
          {productionInfo.additionalMaterials.map((product, index) => (
            <ListItem sx={{ py: 1, px: 0 }} key={index}>
              <ListItemText primary={product} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="body2">{'Нет информации'}</Typography>
        </Stack>
      )}
      <Typography variant="h5" gutterBottom sx={{ mb: 2, mt: 2 }}>
        Характеристики
      </Typography>
      <List disablePadding>
        {specificationsArray.map((product, index) => (
          <ListItem sx={{ py: 1, px: 0 }} key={index}>
            <ListItemText primary={SHOES_SPECIFICATION_RU[product[0] as string]} />
            <Typography variant="body2">{product[1].length > 0 ? product[1] : 'Нет информации'}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};
