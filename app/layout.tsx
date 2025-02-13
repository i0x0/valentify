import type { Metadata } from "next";
import { Galada, JetBrains_Mono } from "next/font/google"
import "./globals.css";

const galada = Galada({
  weight: "400",
  subsets: ["latin"],
  variable: "--galada"
})

const jetbrains = JetBrains_Mono({
  variable: "--jb",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Valentify",
  authors: [
    {
      name: "i0x0",
      url: "https://i0x0.wtf"
    }
  ],
  robots: {
    follow: false,
    index: true,
  },
  description: "Get a playlist generated for you and your lover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${galada.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
