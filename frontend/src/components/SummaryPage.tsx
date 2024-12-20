import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

interface SummaryPageProps {
  selectedDate: Date;
  selectedFood: string;
  selectedDessert: string;
  selectedActivity: string;
}

export default function SummaryPage (props:SummaryPageProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      <Typography variant="h6">Finaler Termin</Typography>
      <Typography>Datum: {props.selectedDate.toDateString()}</Typography>
      <Typography>Essen: {props.selectedFood}</Typography>
      <Typography>Dessert: {props.selectedDessert}</Typography>
      <Typography>Aktivität: {props.selectedActivity}</Typography>
    </Box>
  );
};