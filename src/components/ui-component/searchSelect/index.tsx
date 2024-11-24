import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { IProductInfo } from 'types/product';
import { Box, Typography, Grid } from '@mui/material';
import ProductCard from 'components/forms/product/productCard';
import { OptionCard } from './OptionCard';

interface ISearchSelect {
  label: string;
  inputLabel: string;
  options: IProductInfo[];
  setRelatedId: (product: IProductInfo, type: 'add' | 'remove') => void;
}

const SearchSelect: FC<ISearchSelect> = ({ label, inputLabel, options, setRelatedId }) => {
  const [relatedOptions, setRelatedOptions] = useState<IProductInfo[]>([]);
  const [newOptions, setNewOption] = useState<IProductInfo[]>(options);
  const clickHandler = (option: IProductInfo) => {
    const filteredOptions = newOptions.filter((product) => product.id !== option.id);
    setRelatedOptions((prev) => [...prev, option]);
    setNewOption(filteredOptions);
    setRelatedId(option, 'add');
  };

  const cardHandler = (addProduct: IProductInfo) => {
    const newRelatedProducts = relatedOptions.filter((product) => product.id !== addProduct.id);
    setRelatedOptions(newRelatedProducts);
    setNewOption((prev) => [...prev, addProduct]);
    setRelatedId(addProduct, 'remove');
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        {label}
      </Typography>
      <Stack spacing={2}>
        <Autocomplete
          id={`search-${inputLabel}`}
          freeSolo
          options={newOptions}
          renderOption={(props, option, state) => (
            <Box onClick={() => clickHandler(option)} sx={{ cursor: 'pointer', p: '10px', borderRadius: '10px', transition: '0.3s', ":hover": {
              backgroundColor: '#D3D3D3'
            } }}>
              <OptionCard {...option}/>
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label={inputLabel} />}
        />
      </Stack>
      <Grid item sx={{ pt: '10px' }}>
        <Grid container gap="10px">
          {relatedOptions.length > 0 &&
            relatedOptions.map((item) => <ProductCard key={item.name} {...item} onClick={() => cardHandler(item)} />)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchSelect;
