import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  ButtonProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import ActivityPicker from './ActivityPicker';

interface DessertPickerProps {
  selectedDate: Date;
  selectedFood: string;
}

export default function DessertPicker(props: DessertPickerProps) {
  const { selectedDate, selectedFood } = props;
  const [selectedDessert, setSelectedDessert] = useState<string | null>(null);
  const [showNextComponent, setShowNextComponent] = useState(false);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const dessertOptions = [
    { name: 'Kuchen', img: 'kuchen.jpg' },
    { name: 'Eis', img: 'eis.jpg' },
    { name: 'Baklava', img: 'baklava.jpg' },
    { name: 'Crêpe', img: 'crepe.jpg' },
    { name: 'Zimtschnecke', img: 'zimtschnecke.jpg' },
    { name: 'Tiramisu', img: 'tiramisu.jpg' },
    { name: 'Waffel', img: 'waffel.jpg' },
    { name: 'Popcorn', img: 'popcorn.jpg' },
    { name: 'Nacho', img: 'nacho.jpg' },
    { name: 'Nix bin dick :(', img: 'nix.jpg' }
  ];

  if (showNextComponent) {
    return <ActivityPicker selectedDate={selectedDate} selectedFood={selectedFood} selectedDessert={selectedDessert!} />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      <Typography variant="h6"> Nachtisch? </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {dessertOptions.map((dessert) => (
          <Box
            key={dessert.name}
            onClick={() => setSelectedDessert(dessert.name)}
            sx={{
              border: selectedDessert === dessert.name ? '2px solid red' : '1px solid gray',
              padding: 2,
              cursor: 'pointer'
            }}
          >
            <img src={`/imgs/${dessert.img}`} alt={dessert.name} width="300" height="180" />
            <Typography>{dessert.name}</Typography>
          </Box>
        ))}
      </Box>
      <ColorButton
        variant="contained"
        disabled={!selectedDessert}
        onClick={() => setShowNextComponent(true)}
      >
        weiter
      </ColorButton>
    </Box>
  );
}