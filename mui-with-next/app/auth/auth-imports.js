import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FormGroup,
  TextField,
  Container,
  Stack,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import Link from "next/link";

import useSnackbar from "@/app/hooks/use-snakbar";
import { register,logIn } from "./auth";

import {
  alreadyHaveAccountStackStyle,
  forgotPasswordBtnStyle,
  formContainerStyle,
  formStyle,
  signupBtnStyle,
  termsStackStyle,
  textFieldStyle,
  checkboxWarningStyle,
} from "./auth-styles";

export {
  useState,
  useRouter,
  FormGroup,
  TextField,
  Container,
  Stack,
  Checkbox,
  Button,
  Paper,
  Link,
  useSnackbar,
  register,
  logIn,
  alreadyHaveAccountStackStyle,
  forgotPasswordBtnStyle,
  formContainerStyle,
  formStyle,
  signupBtnStyle,
  termsStackStyle,
  textFieldStyle,
  checkboxWarningStyle,
};
