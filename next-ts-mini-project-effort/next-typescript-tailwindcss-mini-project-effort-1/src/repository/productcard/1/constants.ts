import { ProductCard } from "./interface";
import Wallpaper from "../../../assets/img/wallpaper.jpg"
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg"
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg"

// Example product data
export const products: ProductCard[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 49.99,
    imageUrl: Wallpaper,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Pellentesque euismod semper augue, sit amet pellentesque ipsum placerat non.',
    price: 29.99,
    imageUrl:Wallpaper2
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Vestibulum rutrum elit eu lectus ultrices, et ultrices lorem facilisis.',
    price: 79.99,
    imageUrl: Wallpaper3
  },
];