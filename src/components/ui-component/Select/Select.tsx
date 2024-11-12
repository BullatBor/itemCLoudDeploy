import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IMySelectOptions } from 'types/product';

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  options: IMySelectOptions[];
  onChange: (event: SelectChangeEvent) => void;
  menuHeight?: number;
}

export const MySelect: FC<Props> = ({ id, label, name, value, options, onChange, menuHeight = 150 }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          id={id}
          name={name}
          labelId={`${label}-label`}
          value={value}
          onChange={onChange}
          autoWidth
          label={label}
          MenuProps={{ PaperProps: { sx: { maxHeight: { xs: menuHeight } } } }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label || option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
