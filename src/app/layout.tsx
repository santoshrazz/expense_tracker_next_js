import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Expense Tracker App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
