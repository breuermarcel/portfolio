import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Marcel Breuer",
  description: "IT-Manager, Business Intelligence Expert, Data Scientist",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
