import React from 'react';
import { Box, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import catKiss from "../gifs/cat_kiss.webp";
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

interface SummaryPageProps {
  selectedDate: Date;
  selectedFood: string;
  selectedDessert: string;
  selectedActivity: string;
}

export default function SummaryPage(props: SummaryPageProps) {

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const sendEmail = () => {
    const templateParams = {
      selectedDate: props.selectedDate.toLocaleDateString('de-DE', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      selectedFood: props.selectedFood,
      selectedDessert: props.selectedDessert,
      selectedActivity: props.selectedActivity,
      ccmail: "rober.koeten@web.de",
      mail: "nergizmarxl@gmail.com"
    };

    emailjs.send('service_eh1mglm', 'template_m3wrqcs', templateParams, 'FInJyJGHxrXxvXQHR')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email wurde gesendet pookie!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Leider konnte die email nicht gesendet werden pookie :(');
      });
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        gap={2}
      >
        <Typography variant="h6">Datebestätigung</Typography>
        <Typography>Jetzt musst du den Termin noch bestätigen Pookie :3</Typography>
        <img src={catKiss} alt="Kiss GIF" width="500" />
        <ColorButton onClick={sendEmail}>Date bestätigen</ColorButton>
      </Box>
    </React.Fragment>
  );
}