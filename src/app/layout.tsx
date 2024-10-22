import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/componentes/Nav/Nav";

export const metadata: Metadata = {
  title: "MSB",
  description: "MSB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Nav />
        {children}
      </body>
    </html>
  );
}
