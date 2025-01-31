import "./globals.css";

export const metadata = {
  title: "Marcel Breuer",
  description: "IT-Manager, Business Intelligence Expert, Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
