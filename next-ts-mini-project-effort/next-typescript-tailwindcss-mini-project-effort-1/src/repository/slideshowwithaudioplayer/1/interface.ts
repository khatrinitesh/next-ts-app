export interface Slide {
    image: string;
    audio: string;
  }
  
  export interface SlideshowProps {
    slides: Slide[];
  }