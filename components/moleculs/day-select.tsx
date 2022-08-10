import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { setTimeout } from 'timers/promises';

interface DateSelectProps {
  getDate: (date: Date | null) => void;
}
export default function DateSelect(props: DateSelectProps) {
  const [value, setValue] = React.useState<Date | null>(null);
  const [date, setDate] = React.useState<Date | null>(null);
  const { getDate } = props;
  // const handleGetDateValue = (value: Date | null) => {
  //   setValue(value);
  // };

  React.useEffect(() => {
    if (value != null) {
      setDate(value);
    }
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
