/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: `/_next/static/video/`,
            outputPath: `${isServer ? "../" : ""}static/video/`,
            name: "[name]-[hash].[ext]",
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;