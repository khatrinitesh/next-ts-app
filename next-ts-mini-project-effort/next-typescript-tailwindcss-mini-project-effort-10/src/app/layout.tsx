
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bodyWrapper">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
