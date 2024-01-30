import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import React from 'react';
// TODO
// Snackbar should popup every time when 'Calculate' button is pressed.
// Now it does it on the first time, and after 'DeliveryPrice'  has been resetted.
export const SnackbarCalculated = () => {
  const [open, setOpen] = useState(true)

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    event.preventDefault()
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        message="Delivery fee calculated successfully"
        action={action}
      />
    </>
  );
}
