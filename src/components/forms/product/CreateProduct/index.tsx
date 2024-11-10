'use client';

import { useState, ReactNode } from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import ProducInfoForm from './ProductInfoForm';
import SpecificationsForm from './SpecificationsForm';
import { Review } from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { IProductInfo, ISpecifications } from './types';
import { STEPS_DATA } from './Constants';

const getStepContent = (
  step: number,
  handleNext: () => void,
  handleBack: () => void,
  setErrorIndex: (i: number | null) => void,
  productInfo: IProductInfo,
  setProductInfo: (d: IProductInfo) => void,
  specifications: ISpecifications,
  setSpecifications: (d: ISpecifications) => void
) => {
  switch (step) {
    case 0:
      return (
        <ProducInfoForm handleNext={handleNext} setErrorIndex={setErrorIndex} shippingData={productInfo} setShippingData={setProductInfo} />
      );
    case 1:
      return (
        <SpecificationsForm
          handleNext={handleNext}
          handleBack={handleBack}
          setErrorIndex={setErrorIndex}
          paymentData={specifications}
          setPaymentData={setSpecifications}
        />
      );
    case 2:
      return <Review productionInfo={productInfo} specifications={specifications} />;
    default:
      throw new Error('Unknown step');
  }
};

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const CreateShoesForm = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [productInfo, setProductInfo] = useState<IProductInfo>({});
  const [specifications, setSpecifications] = useState<ISpecifications>({});
  const [errorIndex, setErrorIndex] = useState<number | null>(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard title="Добавление товара">
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {STEPS_DATA.map((label, index) => {
          const labelProps: { error?: boolean; optional?: ReactNode } = {};

          if (index === errorIndex) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Error
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === STEPS_DATA.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setProductInfo({});
                    setSpecifications({});
                    setActiveStep(0);
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(
              activeStep,
              handleNext,
              handleBack,
              setErrorIndex,
              productInfo,
              setProductInfo,
              specifications,
              setSpecifications
            )}
            {activeStep === STEPS_DATA.length - 1 && (
              <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}
                <AnimateButton>
                  <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                    {activeStep === STEPS_DATA.length - 1 ? 'Добавить товар' : 'Следующий'}
                  </Button>
                </AnimateButton>
              </Stack>
            )}
          </>
        )}
      </>
    </MainCard>
  );
};

export default CreateShoesForm;
