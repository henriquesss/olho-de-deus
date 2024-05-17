import React from "react";
import { Nunito_Sans } from "next/font/google";
import { Footer } from "@components/Footer";
import StyledJsxRegistry from "./registry";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Olho de deus",
  description: "Encontre pessoas e animais desaparecidos nas enchentes do RS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledJsxRegistry>
        <ToastContainer />
        <body className={nunito.className}>{children}</body>
      </StyledJsxRegistry>
      <Footer />
    </html>
  );
}
