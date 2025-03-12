import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Marcel Breuer | Curriculum Vitae",
  description: "IT-Manager, Business Intelligence Expert, Data Scientist",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
