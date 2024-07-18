// STYLING
import "../styles/globals.css";

// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {/* s > header */}
        <Header />
        {/* e > header */}
        {/* s > main content */}
        <div className="mainContent flex-col flex grow">
            {children}
        </div>
        {/* e > main content */}
        {/* s > footer */}
        <Footer />
        {/* e > footer */}
      </body>
    </html>
  );
}
