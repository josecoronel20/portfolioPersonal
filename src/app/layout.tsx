import Footer from "./Components/Footer/Footer";
import "./globals.css";
import Header from "./Components/Header/Header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Jose Coronel | React Developer</title>
      <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
      
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
