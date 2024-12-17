
import MainLayout from "@/layout/MainLayout";
import "../style/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='bodyWrapper'>
        {children}
      </body>
    </html>
  );
}
