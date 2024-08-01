

import "../assets/styles/globals.css";
import { montserrat } from "@/components/FontFace/FontFace";
import { metadata } from '@/components/MetaData/MetaData';


export default function RootLayout({ children }: RootLayoutProps) {
  if (!metadata) {
    // Render a fallback or error message if metadata is not available
    return <div>Error: Metadata not found</div>;
  }
  return (
    <html lang="en">
      <head>
      <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:image:type" content={metadata.imageType} />
        <meta property="og:image:width" content={metadata.imageWidth} />
        <meta property="og:image:height" content={metadata.imageHeight} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
      </head>
      <body className={`h-screen ${montserrat.className}`}>{children}</body>
    </html>
  );
}
