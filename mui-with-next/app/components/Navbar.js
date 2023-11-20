"use client";
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("@userId");
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("@userId");
    router.push("/auth/login");
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "1rem" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MY TODO
        </Typography>
        {isLoggedIn && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
