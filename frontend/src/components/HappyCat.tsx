import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import catHappy2 from "../gifs/cat_happy2.gif"
import DatePicker from './DatePicker';

export default function HappyCat () {
  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);
  
  const handleShowDatePicker = () => {
    setShowDatePicker(true);
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
      {showDatePicker ? (
        <DatePicker />
      ) : (
        <React.Fragment>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
            <Box mt={2}>
             <Typography mb={2} variant="h4"> Wusst ichs doch, dass du willst. yuuhuuuuuuu &#128525; </Typography>
            </Box>
            <Box mt={2}>
                <img src={catHappy2} alt="Happy GIF" width="500" />
            </Box>
            <Box mt={2}>
                <ColorButton variant="contained" onClick={handleShowDatePicker}> click me pookie </ColorButton>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};