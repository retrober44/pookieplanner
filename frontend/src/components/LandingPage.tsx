import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import SadCat from './SadCat';
import HappyCat from './HappyCat';
import catValentine from "../gifs/cat_valentine.gif"

export default function LandingPage () {
  const [showHappyCat, setShowHappyCat] = React.useState<boolean>(false);
  
  const handleShowHappyCat = () => {
    setShowHappyCat(true);
  };

  const [showSadCat, setShowSadCat] = React.useState<boolean>(false);

  const handleShowSadCat = () => {
    setShowSadCat(true);
  };

  const closeSadness = () => {
    setShowSadCat(false);
  };

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      {showHappyCat ? (
        <HappyCat />
      ) : (
        <React.Fragment>

          <SadCat
            showSadCat={showSadCat}
            closeSadness={closeSadness}
          /> 

          <Typography mb={2} variant="h4"> do u want to 2 be my valentine pookie? &#128519;&#128519; </Typography>
          <Box display="flex" gap={2} mb={2}>
            <ColorButton size='large' variant="contained" onClick={handleShowHappyCat}> Yes </ColorButton>
            <ColorButton variant="contained" onClick={handleShowHappyCat}> Yes </ColorButton>
            <ColorButton variant="contained" onClick={handleShowHappyCat}>Yes </ColorButton>
          </Box>
          <Box mt={2}>
            <img src={catValentine} alt="Funny GIF" width="800" />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};