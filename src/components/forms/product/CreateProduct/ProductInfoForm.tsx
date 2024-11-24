// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, Autocomplete, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as SIZE from './Constants';
import { IProductInfo, IProductForm, FileType } from 'types/product';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useSelector } from 'store';
import SearchSelect from 'ui-component/searchSelect';
import FileForm from './FileForm';
import MultiLevelList from 'ui-component/multiLevelList';
import { ShoesFields } from './fields/Shoes/shoesFields';

const validationSchema = yup.object({
  // TODO: ожидаем ТЗ
});

interface AddressFormProps {
  shippingData: IProductForm;
  setShippingData: (d: IProductForm) => void;
  handleNext: () => void;
  setErrorIndex: (i: number | null) => void;
  productType: string;
  setProductType: (type: string) => void;
}

const ProductInfoForm = ({ shippingData, setShippingData, handleNext, setErrorIndex, productType, setProductType }: AddressFormProps) => {
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
      if (productType === 'Обувь') {
        setSizeCountryOptions(newSizeCountry);
      }

      formik.setFieldValue('sizeCountry', 'FR');
    }
    if (formik.values.sizeCountry === 'FR' && productType === 'Обувь') {
      setSizeCountryOptions(SIZE.SIZE_COUNRY_DATA);
      formik.setFieldValue('sizeCountry', 'EU');
    }
    formik.setFieldValue('brand', value?.label || '');
  };

  const handleFiles = useCallback(
    (files: File[], type: FileType) => {
      switch (type) {
        case 'image':
          if (files.length > 3) {
          }

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
          <MultiLevelList onChange={setProductType} />
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
          {/* 
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
          </Grid>*/}

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
          {productType === 'Обувь' && <ShoesFields formik={formik} sizeOptions={sizeCountryOptions} />}
          <FileForm
            imgTypeFiles={formik.values.imgFiles}
            videoTypeFiles={formik.values.videoFiles}
            setFiles={handleFiles}
            deleteFiles={handleDeleteFiles}
          />
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
