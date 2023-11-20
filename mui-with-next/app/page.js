"use client";
import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = localStorage.getItem("@userId");
  if (isLoggedIn) {
    redirect("/profile");
  } else {
    redirect("/auth/login");
  }
}
