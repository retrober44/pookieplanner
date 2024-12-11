import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  TextFieldProps
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
      '&:hover': {
        backgroundColor: pink[700],
      },
    }));
  
    return (
    //   <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
          <Typography mb={2}>okay pookie wann?</Typography>
          {/* <MUIDatePicker
            label="Select a date"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          /> */}
          <ColorButton
            variant="contained"
            disabled={!selectedDate}
            onClick={() => alert(`Date selected: ${selectedDate}`)}
          >
            click me pookie
          </ColorButton>
        </Box>
    //   </LocalizationProvider>
    );
  }