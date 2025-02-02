import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format, isValid } from 'date-fns';
import FoodPicker from './FoodPicker';

export default function DatePicker() {
   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 1, 14));
    const [showFoodPicker, setShowFoodPicker] = useState(false);

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
      '&:hover': {
        backgroundColor: pink[700],
      },
    }));

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
          {!showFoodPicker ? (
            <>
              <Typography mb={2} variant="h5" >Das Datum kennen wir ja bereits &#128527;&#x1F60F; </Typography>
              <MUIDatePicker
                label="Wähl ein Datum Pookie"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                inputFormat="dd.MM.yyyy"
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    value={params.inputProps && isValid(new Date(params.inputProps.value)) ? format(new Date(params.inputProps.value), 'dd.MM.yyyy') : ''}
                  />
                )}
              />
              <ColorButton
                variant="contained"
                disabled={!selectedDate}
                onClick={() => setShowFoodPicker(true)}
              >
                weiter
              </ColorButton>
            </>
          ) : (
            <FoodPicker selectedDate={selectedDate!} />
          )}
        </Box>
      </LocalizationProvider>
    );
}