export interface IProduct {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

export interface IProductData {
  title: string;
  description: string;
  image: File | null;
}
