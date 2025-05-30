import type { Metadata } from "next";
import "./globals.css";


// Define your metadata (title, description, etc.)
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

  // Favicon
  icons: {
    icon: '/favicon.ico', // Path to your favicon.ico file
  },

  // Open Graph meta tags (optional)
  openGraph: {
    title: "Create Next App",
    description: "Generated by create next app",
    url: "https://yourwebsite.com",
    siteName: "Create Next App",
    images: [
      {
        url: "/og-image.jpg", // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "Create Next App",
      },
    ],
  },

  // Twitter meta tags (optional)
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    title: "Create Next App",
    description: "Generated by create next app",
    images: ["/og-image.jpg"],
  },
};


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
      </body>
    </html>
  );
}
