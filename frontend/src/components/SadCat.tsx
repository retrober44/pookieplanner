import React from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import catSad from "../gifs/cat_sad.webp";
import DepressedCat from './DepressedCat';

interface SadCatProps {
    showSadCat: boolean;
    closeSadness(): void;
}

export default function SadCat(props: SadCatProps) {

    const [showDepressedCat, setShowDepressedCat] = React.useState<boolean>(false);

    const handleShowDepressedCat = () => {
        setShowDepressedCat(true);
    };

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        '&:hover': {
            backgroundColor: pink[700],
        },
    }));

    return (
        <React.Fragment>
            <DepressedCat
                showDepressedCat={showDepressedCat}
            />
            <Dialog
                open={props.showSadCat}
                onClose={props.closeSadness}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>are u sure :(((((((((</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
                        <img src={catSad} alt="Sad GIF" width="500" />
                        <ColorButton variant="contained" onClick={props.closeSadness}>okay tut mir leid pookie ich will doch</ColorButton>
                        <ColorButton variant="contained" onClick={handleShowDepressedCat}>ja ich bin mir echt zu 100% sicher</ColorButton>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}