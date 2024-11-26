// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Autocomplete, TextField, Modal, Box } from '@mui/material';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as SIZE from './Constants';
import { IProductInfo, IProductForm, FileType } from 'types/product';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'store';
import SearchSelect from 'ui-component/searchSelect';
import FileForm from './FileForm';
import MultiLevelList from 'ui-component/multiLevelList';
import { ShoesFields } from './fields/Shoes/shoesFields';
import { AdditionalMaterials } from './AdditionalMaterials';
import CombinedProducts from './CombinedProducts';
import { OptionCard } from 'ui-component/searchSelect/OptionCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { BIRKENSTON, NIKE_SHOES, TIMBERLAND } from 'store/constant';

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

const MOCK = {
  id: Date.now(),
  name: '',
  brand: '',
  size: [{ value: '42' }],
  sizeCountry: 'EU',
  category: { value: '', path: [] },
  gender: { value: 'male', label: 'мужской' },
  description:
    '',
  additionalMaterials: [],
  image: '',
  combinedProducts: [BIRKENSTON, NIKE_SHOES, TIMBERLAND],
  relatedProducts: [],
  sameCollectionProducts: [],
  sameModelProducts: [],
  imgFiles: []
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductInfoForm = ({ shippingData, setShippingData, handleNext, setErrorIndex, productType, setProductType }: AddressFormProps) => {
  const [sizeCountryOptions, setSizeCountryOptions] = useState(SIZE.SIZE_COUNRY_DATA);
  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.product.productsAll);
  const { id } = useParams();
  const router = useRouter();
  const [combineVariableProducts, setCombineVariableProducts] = useState(products);
  useEffect(() => {
    if (id) {
      const product = products.find((item) => item.id === Number(id))
      formik.setValues(product || MOCK)
    }
  }, [])
  const formik = useFormik<IProductForm>({
    initialValues: {
      id: shippingData.id ?? 1,
      name: shippingData.name ?? '',
      category: shippingData.category ?? '',
      brand: shippingData.brand ?? '',
      gender: shippingData.gender ?? 'male',
      size: shippingData.size ?? [],
      image: '',
      sizeCountry: shippingData.sizeCountry ?? 'EU',
      description: shippingData.description ?? '',
      additionalMaterials: shippingData.additionalMaterials ?? [],
      relatedProducts: shippingData.relatedProducts ?? [],
      sameCollectionProducts: shippingData.sameCollectionProducts ?? [],
      sameModelProducts: shippingData.sameModelProducts ?? [],
      imgFiles: shippingData.imgFiles ?? [],
      combinedProducts: shippingData.combinedProducts
    },
    validationSchema,
    onSubmit: (values) => {
      setShippingData({
        ...values
      });
      handleNext();
    }
  });

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
      }
    },
    [formik.values.imgFiles]
  );

  const handleDeleteFiles = useCallback(
    (type: FileType, index: number) => {
      let newFiles = [];
      switch (type) {
        case 'image':
          newFiles = formik.values.imgFiles.filter((_file, i) => i !== index);
          formik.setFieldValue('imgFiles', newFiles);
          break;
      }
    },
    [formik.values.imgFiles]
  );
  const handleCombineAdd = (product: any) => {
    const newArr = combineVariableProducts.filter(item => item.id !== product.id);
    setCombineVariableProducts(newArr)
    formik.setFieldValue('combinedProducts', [...formik.values.combinedProducts, product])
  }

  const setNewProduct = (newProduct: IProductForm) => {
    if (router) {
      router.push(`/product/${newProduct.id}`);
    }

  }

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <CombinedProducts formik={formik} openModal={setOpen} setNewProduct={setNewProduct} />
          <MultiLevelList formik={formik} onChange={setProductType} />
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
            videoTypeFiles={formik.values.imgFiles}
            setFiles={handleFiles}
            deleteFiles={handleDeleteFiles}
          />
          <AdditionalMaterials formik={formik} />
          <SearchSelect label={'Сопутствующие товары'} inputLabel={'Поиск'} options={products} chooseProducts={formik.values.relatedProducts} setRelatedId={setRelatedProducts} />
          <SearchSelect label={'Товары из одной коллекции'} inputLabel={'Поиск'} options={products} chooseProducts={formik.values.sameCollectionProducts} setRelatedId={setCollectionProducts} />
          <SearchSelect label={'Модели'} inputLabel={'Поиск'} options={products} chooseProducts={formik.values.sameModelProducts} setRelatedId={setModelProducts} />
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" sx={{ my: 3, ml: 1 }} disabled={!productType} type="submit" onClick={() => setErrorIndex(0)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Autocomplete
              id={`search-test`}
              freeSolo
              options={combineVariableProducts}
              renderOption={(props, option, state) => (
                <Box onClick={() => handleCombineAdd(option)} sx={{
                  cursor: 'pointer', p: '10px', borderRadius: '10px', transition: '0.3s', ":hover": {
                    backgroundColor: '#D3D3D3'
                  }
                }}>
                  <OptionCard {...option} />
                </Box>
              )}
              renderInput={(params) => <TextField {...params} label={'Товары'} />}
            />
          </Box>
        </Modal>
      </form>
    </>
  );
};

export default ProductInfoForm;
