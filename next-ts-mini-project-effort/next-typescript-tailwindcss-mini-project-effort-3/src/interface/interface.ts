export interface APISixProps{
    id:number;
    name:string;
    data:{
      Capacity: string;
      Generation: string;
      Price: string;
    }[];
}
export interface APIFiveProps{
  title:string;
  description:string;
  category:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  tags:string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;

}

export interface Constants {
    title: string;
    description: string;
    apiUrl: string;
    // Add other constants as needed
  }