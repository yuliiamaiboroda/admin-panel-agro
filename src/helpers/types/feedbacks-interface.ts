export interface IFeedback {
  id: string;
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
  createdAt: string;
  isFavorite: boolean;
  isReviewed?: boolean;
}

export interface IFeedbackFilter {
  isFavorite?: boolean;
  sort?: string;
  skip?: number;
  limit?: string;
}
export interface IFeedbackPagination {
  skip: number;
  limit: number;
  total: number;
}

export interface IFeedbackList {
  feedbacks: IFeedback[];
  pagination: IFeedbackPagination;
}

export interface IFeedbackState {
  entities: IFeedback[];
  isLoading: boolean;
  error: string | null;
  pagination: IFeedbackPagination;
  certain: IFeedback | null;
}
