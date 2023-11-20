import { CssBaseline } from "@mui/material";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Next with MUI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={roboto.className}>
        <CssBaseline />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
