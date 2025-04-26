export interface Product {
  name: string;
  images: File[] | string[]; // Update this to handle an array of File objects
  category: string;
  price: number;
  description: string;
  status?:string;
}