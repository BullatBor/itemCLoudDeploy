// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ISpecifications } from 'types/product';
import { ShoesSpecifications } from './fields/Shoes/shoesSpecifications';
import { BagsSpecifications } from './fields/Bags/BagsSpecifications';
import { WatchesSpecifications } from './fields/Watches/WatchesSpecifications';
import { GlassesSpecifications } from './fields/Glasses/GlassesSpecifications';
const validationSchema = yup.object({
  /*TODO: Ждать ТЗ */
});

interface PaymentFormProps {
  paymentData: ISpecifications;
  setPaymentData: (d: ISpecifications) => void;
  handleNext: () => void;
  handleBack: () => void;
  setErrorIndex: (i: number | null) => void;
  productType: string;
}

export default function PaymentForm({ productType, paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }: PaymentFormProps) {
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: (values) => {
      setPaymentData({
        ...values
      });
      handleNext();
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {productType === 'Обувь' && <ShoesSpecifications formik={formik} />}
          {productType === 'Сумки' && <BagsSpecifications formik={formik} />}
          {productType === 'Часы' && <WatchesSpecifications formik={formik} />}
          {productType === 'Очки' && <GlassesSpecifications formik={formik} />}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Back
              </Button>
              <AnimateButton>
                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
