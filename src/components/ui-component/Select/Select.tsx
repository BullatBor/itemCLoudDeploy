import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (event: SelectChangeEvent) => void;
}

export const MySelect: FC<Props> = ({ id, label, name, value, options, onChange }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select id={id} name={name} labelId={`${label}-label`} value={value} onChange={onChange} autoWidth label={label}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
