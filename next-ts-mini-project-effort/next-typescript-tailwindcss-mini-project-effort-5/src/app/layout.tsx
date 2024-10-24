import "../assets/style/globals.css";
import { metadata } from "@/layout/Meta";
import { viewport } from './../layout/Viewport';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
     
        <title>{metadata.title}</title>
        
        {/* Traditional Meta Tags */}
        <meta 
          name="viewport" 
          content={`width=${viewport.width}, initial-scale=${viewport.initialScale}, maximum-scale=${viewport.maximumScale}, user-scalable=${viewport.userScalable ? '1' : '0'}`} 
        />
        <meta name="description" content={metadata.description} />
        <meta name="application-name" content={metadata.applicationName} />
        <meta name="author" content={metadata.author} />
        <meta name="generator" content={metadata.generator} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="referrer" content={metadata.referrer} />
        <meta name="creator" content={metadata.creator} />
        <meta name="publisher" content={metadata.publisher} />
        <meta name="format-detection" content={`email=${metadata.formatDetection.email}, address=${metadata.formatDetection.address}, telephone=${metadata.formatDetection.telephone}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        {metadata.openGraph.videos.map((video, index) => (
          <meta key={index} property="og:video" content={video.url} />
        ))}
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/x-png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
