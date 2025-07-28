import "./globals.css";
import Header from "../components/layout/Header/Header";
import React from "react";
import Head from "next/head";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jose Coronel | Fullstack Developer",
  description: "Portafolio de Jose Coronel, Fullstack Developer",
  keywords: [
    "Jose Coronel",
    "Fullstack Developer",
    "Portafolio",
    "Desarrollador",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Portafolio",
    "Desarrollador",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  author: "Jose Coronel",
  image: "/img/favicon.png",
  icons: {
    icon: "/img/favicon.png",
  },
  openGraph: {
    title: "Jose Coronel | Fullstack Developer",
    description: "Portafolio de Jose Coronel, Fullstack Developer",
    image: "/img/favicon.png",
  },
};

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
