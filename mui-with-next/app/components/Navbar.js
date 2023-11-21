"use client";
import { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import AuthContext from "../context/auth-context";

const Navbar = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.onLogout();
    router.push("/auth/login");
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "1rem" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MY TODO
        </Typography>
        {authCtx.isLoggedIn && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
