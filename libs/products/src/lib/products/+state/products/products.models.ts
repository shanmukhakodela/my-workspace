/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: string | number; // Primary ID
  name: string;
  description: string;
  added: boolean;
  image: string;
  price: number;
  avatar: string;
  author: string
}
