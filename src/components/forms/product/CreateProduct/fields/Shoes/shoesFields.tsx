import { FC, SyntheticEvent } from 'react';
import { MySelect } from 'ui-component/Select/Select';
import { Checkbox, Grid, Autocomplete, TextField, SelectChangeEvent } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as SIZE from '../../Constants';
import { IMySelectOptions } from 'types/product';
import ShoeSizeChart from 'ui-component/sizeTable';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface PROPS {
  formik: any;
  sizeOptions: IMySelectOptions[];
}
export const ShoesFields: FC<PROPS> = ({ formik, sizeOptions }) => {
  const genderHandler = (e: SyntheticEvent, value: IMySelectOptions[]) => {
    formik.setFieldValue('size', []);
    formik.handleChange(e);
  };

  const sizeHandler = (e: SyntheticEvent, value: IMySelectOptions[]) => {
    formik.setFieldValue('size', value);
  };
  const sizeCountryHandler = (e: SelectChangeEvent) => {
    formik.setFieldValue('size', []);
    formik.handleChange(e);
  };
  return (
    <>
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
                return (
                  <li {...props}>
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
                  options={sizeOptions}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ShoeSizeChart />
    </>
  );
};
