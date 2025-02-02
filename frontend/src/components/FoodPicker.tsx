import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  ButtonProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import DessertPicker from './DessertPicker';

interface FoodPickerProps {
  selectedDate: Date;
}

export default function FoodPicker(props: FoodPickerProps) {
  const { selectedDate } = props;
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [showDessertPicker, setShowDessertPicker] = useState(false);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const foodOptions = [
    { name: 'Pizza', img: 'pizza.jpg' },
    { name: 'Burger', img: 'burger.jpg' },
    { name: 'Sushi', img: 'sushi.jpg' },
    { name: 'Pasta', img: 'pasta.jpg' },
    { name: 'Döner', img: 'doener.jpg' },
    { name: 'Asiatisch', img: 'asiatisch.jpg' },
    { name: 'Indisch', img: 'indisch.jpg' },
    { name: 'Mexikanisch', img: 'mexikanisch.jpg' },
    { name: 'Bowl', img: 'bowl.jpg' },
    { name: 'Tapas', img: 'tapas.jpg' },
    { name: 'Deutsch', img: 'deutsch.jpg' },
    { name: 'Türkisch', img: 'tuerkisch.jpg' },
    { name: 'Persisch', img: 'persisch.jpg' },


  ];

  if (showDessertPicker) {
    return <DessertPicker selectedDate={selectedDate} selectedFood={selectedFood!} />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      <Typography variant="h5"> Was gibs zu futtern?  &#128523;</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {foodOptions.map((food) => (
          <Box
            key={food.name}
            onClick={() => setSelectedFood(food.name)}
            sx={{
              border: selectedFood === food.name ? '2px solid red' : '1px solid gray',
              padding: 2,
              cursor: 'pointer'
            }}
          >
            <img src={`/imgs/${food.img}`} alt={food.name} width="300" height="180" />
            <Typography>{food.name}</Typography>
          </Box>
        ))}
      </Box>
      <ColorButton
        variant="contained"
        disabled={!selectedFood}
        onClick={() => setShowDessertPicker(true)}
      >
        weiter
      </ColorButton>
    </Box>
  );
}