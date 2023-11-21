"use client";
import { redirect } from "next/navigation";
import AuthContext from "./context/auth-context";
import { useContext } from "react";

export default function Home() {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    redirect("/profile");
  } else {
    redirect("/auth/login");
  }
}
