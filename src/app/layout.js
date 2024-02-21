"use client";
import { Inter, Abril_Fatface, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const abril_Fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-Fatface",
  display: "swap",
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-Sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
 
      <html lang="en">
        <body
          className={`${inter.variable} ${abril_Fatface.variable} ${nunito_Sans.variable}`}
        >
          <ThemeProvider> 
          {children}
          </ThemeProvider> 

        </body>
      </html>
  );
}
