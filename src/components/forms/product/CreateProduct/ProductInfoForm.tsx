// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  IconButton,
  SelectChangeEvent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { MySelect } from 'ui-component/Select/Select';
import * as SIZE from './Constants';
import { IProductInfo, IProductForm, IMySelectOptions, FileType } from 'types/product';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useSelector } from 'store';
import SearchSelect from 'ui-component/searchSelect';
import FileForm from './FileForm';
import ShoeSizeChart from '../../../ui-component/sizeTable';
import MultiLevelList from 'ui-component/multiLevelList';

const validationSchema = yup.object({
  // TODO: ожидаем ТЗ
});

interface AddressFormProps {
  shippingData: IProductForm;
  setShippingData: (d: IProductForm) => void;
  handleNext: () => void;
  setErrorIndex: (i: number | null) => void;
}

const ProductInfoForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }: AddressFormProps) => {
  const [sizeCountryOptions, setSizeCountryOptions] = useState(SIZE.SIZE_COUNRY_DATA);

  const products = useSelector((state) => state.product.productsAll);
  const formik = useFormik({
    initialValues: {
      id: shippingData.id ?? 1,
      name: shippingData.name ?? '',
      category: shippingData.category ?? '',
      brand: shippingData.brand ?? '',
      gender: shippingData.gender ?? 'male',
      size: shippingData.size ?? [],
      sizeCountry: shippingData.sizeCountry ?? 'EU',
      description: shippingData.description ?? '',
      additionalMaterials: shippingData.additionalMaterials ?? [],
      relatedProducts: shippingData.relatedProducts ?? [],
      sameCollectionProducts: shippingData.sameCollectionProducts ?? [],
      sameModelProducts: shippingData.sameModelProducts ?? [],
      imgFiles: shippingData.imgFiles ?? [],
      videoFiles: shippingData.videoFiles ?? []
    },
    validationSchema,
    onSubmit: (values) => {
      setShippingData({
        ...values
      });
      handleNext();
    }
  });

  const addMaterials = () => {
    formik.setFieldValue('additionalMaterials', [...formik.values.additionalMaterials, '']);
  };

  const removeMaterials = (index: number) => {
    formik.setFieldValue(
      'additionalMaterials',
      formik.values.additionalMaterials.filter((_, i) => i !== index)
    );
  };

  const sizeCountryHandler = (e: SelectChangeEvent) => {
    formik.setFieldValue('size', []);
    formik.handleChange(e);
  };

  const setRelatedProducts = (newProduct: IProductInfo, type: 'add' | 'remove') => {
    if (type === 'add') {
      formik.setFieldValue('relatedProducts', [...formik.values.relatedProducts, newProduct]);
    } else {
      const newRelatedProducts = formik.values.relatedProducts.filter((product) => product.id !== newProduct.id);
      formik.setFieldValue('relatedProducts', newRelatedProducts);
    }
  };

  const setCollectionProducts = (newProduct: IProductInfo, type: 'add' | 'remove') => {
    if (type === 'add') {
      formik.setFieldValue('sameCollectionProducts', [...formik.values.sameCollectionProducts, newProduct]);
    } else {
      const newRelatedProducts = formik.values.sameCollectionProducts.filter((product) => product.id !== newProduct.id);
      formik.setFieldValue('sameCollectionProducts', newRelatedProducts);
    }
  };

  const setModelProducts = (newProduct: IProductInfo, type: 'add' | 'remove') => {
    if (type === 'add') {
      formik.setFieldValue('sameModelProducts', [...formik.values.sameModelProducts, newProduct]);
    } else {
      const newRelatedProducts = formik.values.sameModelProducts.filter((product) => product.id !== newProduct.id);
      formik.setFieldValue('sameModelProducts', newRelatedProducts);
    }
  };

  const brandHandler = (e: SyntheticEvent, value: { label: string } | null) => {
    if (value?.label === 'ADIDAS') {
      const newSizeCountry = SIZE.getSizeCounry(value?.label);
      setSizeCountryOptions(newSizeCountry);

      formik.setFieldValue('sizeCountry', 'FR');
    }
    if (formik.values.sizeCountry === 'FR') {
      setSizeCountryOptions(SIZE.SIZE_COUNRY_DATA);
      formik.setFieldValue('sizeCountry', 'EU');
    }
    formik.setFieldValue('brand', value?.label || '');
  };

  const categoryHandler = (e: SyntheticEvent, value: { label: string } | null) => {
    formik.setFieldValue('category', value?.label);
  };

  const genderHandler = (e: SyntheticEvent, value: IMySelectOptions[]) => {
    formik.setFieldValue('size', []);
    formik.handleChange(e);
  };

  const sizeHandler = (e: SyntheticEvent, value: IMySelectOptions[]) => {
    formik.setFieldValue('size', value);
  };

  const handleFiles = useCallback(
    (files: File[], type: FileType) => {
      switch (type) {
        case 'image':
          formik.setFieldValue('imgFiles', [...formik.values.imgFiles, ...files]);
          break;
        case 'video':
          formik.setFieldValue('videoFiles', [...formik.values.videoFiles, ...files]);
          break;
        case 'video':
          formik.setFieldValue('videoFiles', [...formik.values.videoFiles, ...files]);
          break;
      }
    },
    [formik.values.imgFiles, formik.values.videoFiles]
  );

  const handleDeleteFiles = useCallback(
    (type: FileType, index: number) => {
      let newFiles = [];
      switch (type) {
        case 'image':
          newFiles = formik.values.imgFiles.filter((_file, i) => i !== index);
          formik.setFieldValue('imgFiles', newFiles);
          break;
        case 'video':
          newFiles = formik.values.videoFiles.filter((_file, i) => i !== index);
          formik.setFieldValue('videoFiles', newFiles);
          break;
      }
    },
    [formik.values.imgFiles, formik.values.videoFiles]
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="name"
              name="name"
              label="Название *"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              options={SIZE.BRAND_DATA}
              value={{ label: formik.values.brand }}
              sx={{ width: '100%' }}
              onChange={brandHandler}
              id="brand"
              renderInput={(params) => <TextField label={'Бренд'} value={formik.values.brand} {...params} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="category"
              disablePortal
              value={{ label: formik.values.category }}
              options={SIZE.CATEGORY_DATA}
              onChange={categoryHandler}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Категория" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={SIZE.GENDER_DATA}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.label || option.value}
                  onChange={genderHandler}
                  renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                      <li key={key} {...optionProps}>
                        <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                        {option.label || option.value}
                      </li>
                    );
                  }}
                  renderInput={(params) => <TextField {...params} label="Пол" placeholder="Пол" />}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={9}>
                    <Autocomplete
                      multiple
                      sx={{ width: '100%' }}
                      id="size"
                      value={formik.values.size}
                      onChange={sizeHandler}
                      options={SIZE.SHOES_SIZES[`${formik.values.sizeCountry}-${formik.values.gender}`]}
                      getOptionLabel={(option) => option.value}
                      renderInput={(params) => <TextField {...params} label="Размер" placeholder="Размер" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <MySelect
                      id="sizeCountry"
                      label={'Страна'}
                      name={'sizeCountry'}
                      value={formik.values.sizeCountry}
                      onChange={sizeCountryHandler}
                      options={sizeCountryOptions}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Описание"
              value={formik.values.description}
              onChange={formik.handleChange}
              multiline
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <FileForm
            imgTypeFiles={formik.values.imgFiles}
            videoTypeFiles={formik.values.videoFiles}
            setFiles={handleFiles}
            deleteFiles={handleDeleteFiles}
          />
          <ShoeSizeChart />
          <MultiLevelList />
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Дополнительные материалы
            </Typography>

            {formik.values.additionalMaterials.length ? (
              <Grid container spacing={2}>
                {formik.values.additionalMaterials.map((_, index) => {
                  return (
                    <Grid key={index} item xs={12}>
                      <Stack direction="row" alignItems="center" justifyContent="flex-end">
                        <TextField
                          id="description"
                          label="Доп материал"
                          fullWidth
                          autoComplete="shipping address-line2"
                          {...formik.getFieldProps(`additionalMaterials[${index}]`)}
                        />
                        <IconButton aria-label="delete" onClick={() => removeMaterials(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <Stack alignItems="center" justifyContent="center">
                <Typography variant="body2">{'Ничего нет'}</Typography>
              </Stack>
            )}

            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="button" onClick={addMaterials}>
                  Добавить
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
          <SearchSelect label={'Сопутствующие товары'} inputLabel={'Поиск'} options={products} setRelatedId={setRelatedProducts} />
          <SearchSelect label={'Товары из одной коллекции'} inputLabel={'Поиск'} options={products} setRelatedId={setCollectionProducts} />
          <SearchSelect label={'Товары такой же модели'} inputLabel={'Поиск'} options={products} setRelatedId={setModelProducts} />
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProductInfoForm;
