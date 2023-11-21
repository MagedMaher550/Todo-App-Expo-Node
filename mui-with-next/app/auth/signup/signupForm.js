"use client";
import * as Imports from "../auth-imports";

function SignupForm() {
  const router = Imports.useRouter();

  const authCtx = Imports.useContext(Imports.AuthContext);

  const { openSnackBarHandler, SnackBar } = Imports.useSnackbar(
    "Sorry, this feature isn't available yet."
  );

  const [username, setUsername] = Imports.useState("");
  const [password, setPassword] = Imports.useState("");
  const [email, setEmail] = Imports.useState("");
  const [checkbox, setCheckbox] = Imports.useState(false);

  const [showFormWarning, setShowFormWarning] = Imports.useState(false);
  const [formWarningMsg, setFormWarningMsg] = Imports.useState("");

  const [isNameTouched, setIsNameTouched] = Imports.useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = Imports.useState(false);
  const [isEmailTouched, setIsEmailTouched] = Imports.useState(false);

  const usernameNotValid = username.trim().length === 0 && isNameTouched;
  const passwordNotValid = password.trim().length < 6 && isPasswordTouched;
  const emailNotValid = email.trim().length === 0 && isEmailTouched;

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    setIsNameTouched(true);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailTouched(true);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setIsPasswordTouched(true);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (!checkbox) {
      setFormWarningMsg("Please Accept Terms and Conditions.");
      setShowFormWarning(true);
      return;
    }

    if (!isNameTouched || !isEmailTouched || !isPasswordTouched) {
      setFormWarningMsg("Please fill all required fields");
      setShowFormWarning(true);
      return;
    }

    if (usernameNotValid || passwordNotValid || emailNotValid) {
      setShowFormWarning(false);
      return;
    }

    Imports.register(router, username, email, password);
    authCtx.onLogin();
    console.log("Auth login Changed here in signInForm: ");

    setEmail("");
    setUsername("");
    setPassword("");

    setIsNameTouched(false);
    setIsEmailTouched(false);
    setIsPasswordTouched(false);

    setShowFormWarning(false);
  };

  return (
    <Imports.Container sx={Imports.formContainerStyle}>
      <form onSubmit={signUpHandler}>
        <Imports.FormGroup sx={Imports.formStyle}>
          <Imports.TextField
            required
            className="inputField"
            id="username"
            type="text"
            label="Enter Your Username"
            variant="outlined"
            sx={Imports.textFieldStyle}
            value={username}
            onChange={usernameChangeHandler}
            error={usernameNotValid}
            helperText={usernameNotValid ? "Please Enter a Valid Username" : ""}
          />
          <Imports.TextField
            required
            className="inputField"
            id="email"
            type="email"
            label="Enter Your Email"
            variant="outlined"
            sx={Imports.textFieldStyle}
            value={email}
            onChange={emailChangeHandler}
            error={emailNotValid}
            helperText={emailNotValid ? "Please Enter a Valid Email" : ""}
          />
          <Imports.TextField
            required
            className="inputField"
            id="password"
            type="password"
            label="Enter Your Password"
            variant="outlined"
            sx={Imports.textFieldStyle}
            value={password}
            onChange={passwordChangeHandler}
            error={passwordNotValid}
            helperText={passwordNotValid ? "Please Enter a Valid Password" : ""}
          />
          <Imports.Stack direction="row" sx={Imports.termsStackStyle}>
            <Imports.Checkbox
              value={checkbox}
              onChange={(event) => setCheckbox(event.target.checked)}
            />
            <small>I agree to terms and conditions </small>
          </Imports.Stack>
          {showFormWarning && (
            <Imports.Paper sx={Imports.checkboxWarningStyle}>
              <small>{formWarningMsg}</small>
            </Imports.Paper>
          )}
          <Imports.Button
            variant="contained"
            type="submit"
            size="large"
            sx={Imports.signupBtnStyle}
          >
            SIGN UP
          </Imports.Button>
          <Imports.Stack
            direction="row"
            sx={Imports.alreadyHaveAccountStackStyle}
          >
            <div>
              Already have an account?{" "}
              <Imports.Link href="/auth/login"> Login </Imports.Link>
            </div>
            <Imports.Button
              variant="text"
              sx={Imports.forgotPasswordBtnStyle}
              onClick={openSnackBarHandler}
            >
              Forgot Password?
            </Imports.Button>
          </Imports.Stack>
        </Imports.FormGroup>
      </form>
      {SnackBar}
    </Imports.Container>
  );
}

export default SignupForm;
