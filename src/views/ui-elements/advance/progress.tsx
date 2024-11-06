'use client';

import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, CircularProgress, Grid, LinearProgress, Typography, CircularProgressProps, LinearProgressProps } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// customized with label
function CircularProgressWithLabel({ value, ...other }: CircularProgressProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex'
      }}
    >
      <CircularProgress aria-label="progress" variant="determinate" value={value} {...other} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(value!)}%`}</Typography>
      </Box>
    </Box>
  );
}

function LinearProgressWithLabel({ value, ...other }: LinearProgressProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          mr: 1
        }}
      >
        <LinearProgress variant="determinate" value={value} {...other} />
      </Box>
      <Box
        sx={{
          minWidth: 35
        }}
      >
        <Typography variant="body2" color="textSecondary">{`${Math.round(value!)}%`}</Typography>
      </Box>
    </Box>
  );
}

// style constant
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5
  }
}));

// ==============================|| UI PROGRESS ||============================== //

const UIProgress = () => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MainCard title="Progress" secondary={<SecondaryAction link="https://next.material-ui.com/components/progress/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Circular Indeterminate">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <CircularProgress aria-label="progress" />
              </Grid>
              <Grid item>
                <CircularProgress aria-label="progress with secondary color" color="secondary" />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Circular Determinate">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <CircularProgress aria-label="progress 25%" variant="determinate" value={25} />
              </Grid>
              <Grid item>
                <CircularProgress aria-label="progress 50%" variant="determinate" value={50} />
              </Grid>
              <Grid item>
                <CircularProgress aria-label="progress 75%" variant="determinate" value={75} />
              </Grid>
              <Grid item>
                <CircularProgress variant="determinate" aria-label="progress 100%" value={100} />
              </Grid>
              <Grid item>
                <CircularProgress variant="determinate" aria-label="progress 50%" value={50} />
              </Grid>
              <Grid item>
                <CircularProgress variant="determinate" aria-label="progress" value={progress} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Circular Label">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <CircularProgressWithLabel aria-label="progress with label%" value={progress} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Linear Indeterminate">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <LinearProgress aria-label="progress" />
              </Grid>
              <Grid item xs={12}>
                <LinearProgress aria-label="secondary progress" color="secondary" />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Linear Label">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <LinearProgressWithLabel aria-label="linear progress" value={progress} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Linear Determinate">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <LinearProgress variant="determinate" aria-label="linear determinate progress" value={progress} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Linear Buffer">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <LinearProgress variant="buffer" aria-label="Buffer progress" value={progress} valueBuffer={buffer} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Color">
            <Grid container direction="column" spacing={3}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs>
                    <LinearProgress aria-label="secondary color progress" variant="determinate" color="secondary" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.success.main }}>
                    <LinearProgress aria-label="success color progress" color="inherit" variant="determinate" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.error.main }}>
                    <LinearProgress color="inherit" variant="determinate" aria-label="danger color progress" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.warning.main }}>
                    <LinearProgress color="inherit" variant="determinate" aria-label="warning color progress" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.info.main }}>
                    <LinearProgress color="inherit" variant="determinate" aria-label="info color progress" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Color With Height">
            <Grid container direction="column" spacing={3}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs>
                    <BorderLinearProgress variant="determinate" aria-label="secondary color progress" color="secondary" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.success.main }}>
                    <BorderLinearProgress color="inherit" aria-label="success color progress" variant="determinate" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.error.main }}>
                    <BorderLinearProgress color="inherit" aria-label="danger color progress" variant="determinate" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.warning.main }}>
                    <BorderLinearProgress color="inherit" aria-label="warning color progress" variant="determinate" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Typography variant="caption">Progress</Typography>
                  </Grid>
                  <Grid item xs sx={{ color: theme.palette.info.main }}>
                    <BorderLinearProgress aria-label="info color progress" color="inherit" variant="determinate" value={progress} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{Math.round(progress)}%</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default UIProgress;
