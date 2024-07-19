import { IconType } from 'react-icons';

export interface SocialMediaPlatform {
    name: string;
    icon: IconType; // Icon class name from your icon library or SVG path
    color: string; // Background color class from Tailwind CSS
  }

  interface SocialMediaPlatformProps {
    platforms: SocialMediaPlatform[];
  }
  