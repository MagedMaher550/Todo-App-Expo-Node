import React from "react";
import { useState } from "react";
import { Snackbar, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const useSnackbar = (message) => {
  const [openSnackBar, setOpenSnakBar] = useState();

  const openSnackBarHandler = () => {
    setOpenSnakBar(true);
  };
  const closeSnackBarHandler = () => {
    setOpenSnakBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackBarHandler}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const SnackBar = (
    <Snackbar
      open={openSnackBar}
      autoHideDuration={6000}
      onClose={closeSnackBarHandler}
      message={message}
      action={action}
    />
  );

  return {
    openSnackBarHandler,
    SnackBar,
  };
};

export default useSnackbar;
