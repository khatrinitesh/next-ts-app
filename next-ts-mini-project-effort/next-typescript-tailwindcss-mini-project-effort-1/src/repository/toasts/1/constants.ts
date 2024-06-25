import { TimelineEvent  } from "./interface.ts";
import Wallpaper1 from '../../../assets/img/wallpaper.jpg';
import Wallpaper2 from '../../../assets/img/wallpaper2.jpg';
import Wallpaper3 from '../../../assets/img/wallpaper3.jpg';
import { Toast } from "./interface.js";

export const TOASTS:Toast[] = [
    { id: 1, type: 'success', message: 'Operation successful!' },
    { id: 2, type: 'error', message: 'An error occurred!' },
    { id: 3, type: 'warning', message: 'Warning: Proceed with caution!' },
    { id: 4, type: 'info', message: 'Informational message.' },
    // Add more timeline events as needed
]