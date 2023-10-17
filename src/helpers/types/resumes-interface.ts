export interface IResume {
  id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  resumeFileURL: string | null;
  comment: string;
  createdAt: string;
  isFavorite: boolean;
  isReviewed?: boolean;
}

export interface IResumePagination {
  skip: number;
  limit: number;
  total: number;
}

export interface IResumeList {
  resumes: IResume[];
  pagination: IResumePagination;
}

export interface IResumeFilter {
  isFavorite?: boolean;
  position?: string;
  sort?: string;
  limit?: string;
  skip?: number;
}

export interface IResumeState {
  entities: IResume[];
  pagination: IResumePagination;
  certain: IResume | null;
  isLoading: boolean;
  error: string | null;
}
