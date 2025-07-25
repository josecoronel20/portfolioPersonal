import "./globals.css";
import Header from "../components/layout/Header/Header";
import React from "react";
import Head from "next/head";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
});

//Layout principal de la aplicación.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Head>
        <title>Jose Coronel | React Developer</title>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
      </Head>
      <body
        className={`${quicksand.className} min-h-screen bg-white dark:bg-gray-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
