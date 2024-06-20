    export interface ProductCard{
        id:number;
        name:string;
        description:string;
        price:number;
        imageUrl:string;
    }
    export interface ProductProps {
        product: ProductCard;
      }