import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "portaalvoormij.nl",
  description: "Verbind klanten, verkopers en leveranciers op één platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
