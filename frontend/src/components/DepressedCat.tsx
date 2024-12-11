import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import catDepressed from "../gifs/cat_depressed.webp"

interface DepressedCatProps {
    showDepressedCat: boolean
}

export default function DepressedCat (props:DepressedCatProps) {
      
  return (
    <React.Fragment>
        <Dialog
        open={props.showDepressedCat}
        >
        <DialogTitle> Keiner mag dich!!!! </DialogTitle>
            <DialogContent>
                <img src={catDepressed} alt="Sad GIF" width="300" />
            </DialogContent>
        </Dialog>
    </React.Fragment>
  )
}
