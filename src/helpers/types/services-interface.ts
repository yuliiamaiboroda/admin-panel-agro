export interface IService {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt?: string;
}

export interface IServiceState {
  entities: IService[];
  certain: IService | null;
  isLoading: boolean;
  error: string | null;
}

export interface IServiceData {
  title: string;
  description: string;
  image: File | null;
  price: string;
  contactMail: string;
  contactPhone: string;
}
