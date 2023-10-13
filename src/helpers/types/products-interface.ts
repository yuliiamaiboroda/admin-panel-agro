export interface IProduct {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt: string;
}

export interface IProductData {
  title: string;
  description: string;
  image: File | null;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export interface IProductState {
  entities: IProduct[];
  certain: IProduct | null;
  isLoading: boolean;
  error: string | null;
}
