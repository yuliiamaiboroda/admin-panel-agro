export interface IResume {
  _id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  resumeFileURL: string;
  comment: string;
  isFavorite: boolean;
}

export interface IResumeEntity {
  _id: string;
  name: string;
  position: string;
  comment: string;
  isFavorite: boolean;
  isReviewed: boolean;
}

export interface IResumePagination {
  skip: number;
  limit: number;
  total: number;
}

export interface IResumeResponse {
  resumes: IResumeEntity[];
  pagination: IResumePagination;
}

export interface IResumeFilter {
  isFavorite?: boolean;
  position?: string;
  sort?: string;
  limit?: string;
  skip?: number;
}
