import React from "react";
import SignInForm from "./signinForm";
import { Avatar, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  avatarContainerStyle,
  avatarIconStyle,
  avatarStyle,
} from "../auth-styles";

export default function Login(props) {
  return (
    <Container sx={avatarContainerStyle}>
      <Avatar sx={avatarStyle}>
        <LockOutlinedIcon sx={avatarIconStyle} />
      </Avatar>
      <Typography component="h1" variant="h5" mt={1} mb={1}>
        Login
      </Typography>
      <SignInForm />
    </Container>
  );
}
