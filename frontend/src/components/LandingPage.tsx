import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import catBegs from "../gifs/cat_begs.gif"
import SadCat from './SadCat';
import HappyCat from './HappyCat';

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

          <Typography mb={2} variant="h6"> do u want to 2 go on a date with me pookie? </Typography>
          <Box display="flex" gap={2} mb={2}>
            <ColorButton variant="contained" onClick={handleShowHappyCat}> Yes </ColorButton>
            <ColorButton variant="contained" onClick={handleShowHappyCat}> Yes </ColorButton>
            <ColorButton variant="contained" onClick={handleShowSadCat}> No :( </ColorButton>
          </Box>
          <Box mt={2}>
            <img src={catBegs} alt="Funny GIF" width="600" />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};