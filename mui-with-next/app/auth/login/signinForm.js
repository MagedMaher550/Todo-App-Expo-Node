"use client";
import * as Imports from "../auth-imports";

function SignInForm() {
  const router = Imports.useRouter();

  const authCtx = Imports.useContext(Imports.AuthContext);

  const [password, setPassword] = Imports.useState("");
  const [email, setEmail] = Imports.useState("");

  const [showFormWarning, setShowFormWarning] = Imports.useState(false);
  const [formWarningMsg, setFormWarningMsg] = Imports.useState("");

  const [isPasswordTouched, setIsPasswordTouched] = Imports.useState(false);
  const [isEmailTouched, setIsEmailTouched] = Imports.useState(false);

  const passwordNotValid = password.trim().length < 6 && isPasswordTouched;
  const emailNotValid = email.trim().length === 0 && isEmailTouched;

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailTouched(true);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setIsPasswordTouched(true);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (!isEmailTouched || !isPasswordTouched) {
      setFormWarningMsg("Please fill all required fields");
      setShowFormWarning(true);
      return;
    }

    if (passwordNotValid || emailNotValid) {
      setShowFormWarning(false);
      return;
    }

    Imports.logIn(router, email, password);
    authCtx.onLogin();
    console.log("Auth login Changed here in signInForm: ");
    setEmail("");
    setPassword("");

    setIsEmailTouched(false);
    setIsPasswordTouched(false);

    setShowFormWarning(false);
  };

  return (
    <Imports.Container sx={Imports.formContainerStyle}>
      <form onSubmit={loginHandler}>
        <Imports.FormGroup sx={Imports.formStyle}>
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
            LOGIN
          </Imports.Button>
          <Imports.Stack
            direction="row"
            sx={Imports.alreadyHaveAccountStackStyle}
          >
            <div>
              Don&apos;t have an account?
              <Imports.Link href="/auth/signup"> Signup </Imports.Link>
            </div>
          </Imports.Stack>
        </Imports.FormGroup>
      </form>
    </Imports.Container>
  );
}

export default SignInForm;
