import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  ButtonProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import SummaryPage from './SummaryPage';

interface ActivityPickerProps {
  selectedDate: Date;
  selectedFood: string;
  selectedDessert: string;
}

export default function ActivityPicker(props: ActivityPickerProps) {
  const { selectedDate, selectedFood, selectedDessert } = props;
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showNextComponent, setShowNextComponent] = useState(false);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const activityOptions = [
    { name: 'Bowling', img: 'bowling.jpg' },
    { name: 'Spazieren', img: 'spazieren.jpg' },
    { name: 'Wandern', img: 'wandern.jpg' },
    { name: 'Joggen', img: 'joggen.jpg' },
    { name: 'Fahrrad fahren', img: 'rad.jpg' },
    { name: 'Dart', img: 'dart.jpg' },
    { name: 'Switch', img: 'switch.jpg' },
    { name: 'Filmabend', img: 'filmabend.jpg' },
    { name: 'Kino', img: 'kino.jpg' },
    { name: 'Billard', img: 'billard.jpg' },
    { name: 'Gym', img: 'gym.jpg' },
    { name: 'Gesellschaftsspiele', img: 'geschellschaftsspiele.jpg' },
    { name: '***', img: 'zwinkern.jpg' }
  ];

  if (showNextComponent) {
    return (
      <SummaryPage
        selectedDate={selectedDate}
        selectedFood={selectedFood}
        selectedDessert={selectedDessert}
        selectedActivity={selectedActivity!}
      />
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      <Typography variant="h6">Und was machen wir danach, Pookie?</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {activityOptions.map((activity) => (
          <Box
            key={activity.name}
            onClick={() => setSelectedActivity(activity.name)}
            sx={{
              border: selectedActivity === activity.name ? '2px solid red' : '1px solid gray',
              padding: 2,
              cursor: 'pointer'
            }}
          >
            <img src={`/imgs/${activity.img}`} alt={activity.name} width="300" height="180" />
            <Typography>{activity.name}</Typography>
          </Box>
        ))}
      </Box>
      <ColorButton
        variant="contained"
        disabled={!selectedActivity}
        onClick={() => setShowNextComponent(true)}
      >
        weiter
      </ColorButton>
    </Box>
  );
}