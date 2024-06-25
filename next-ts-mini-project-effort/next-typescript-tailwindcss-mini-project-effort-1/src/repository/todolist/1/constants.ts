import { Todo  } from "./interface.ts";
import Wallpaper1 from '../../../assets/img/wallpaper.jpg';
import Wallpaper2 from '../../../assets/img/wallpaper2.jpg';
import Wallpaper3 from '../../../assets/img/wallpaper3.jpg';

export const INITIAL_TODOS:Todo[] = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Implement Todo List', completed: true },
    { id: 3, text: 'Style with Tailwind CSS', completed: false },
    // Add more initial todos as needed
]