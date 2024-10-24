import { MetaProps } from "@/types/type";

const MetaData:React.FC<MetaProps> = ({openGraph }) => {
  return (
    <>
      <meta name="description" content={openGraph.description} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:locale" content={openGraph.locale} />

      {openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      {openGraph.videos?.map((video, index) => (
        <meta key={index} property="og:video" content={video.url} />
      ))}
      {openGraph.audio?.map((audio, index) => (
        <meta key={index} property="og:audio" content={audio.url} />
      ))}
    </>
  );
};

export default MetaData;
