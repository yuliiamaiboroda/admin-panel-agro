export interface IFeedback {
  id: string;
  name: string;
  comment: string;
  isReviewed: boolean;
  isFavorite: boolean;
}

export interface IFeedbackFilter {
  isFavorite?: boolean;
  sort?: string;
  skip?: number;
  limit?: string;
}
export interface IFeedbackCertain {
  id: string;
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
  isFavorite: boolean;
  createdAt: string;
}
export interface IFeedbackPagination {
  skip: number;
  limit: number;
  total: number;
}

export interface IFeedbackResponse {
  feedbacks: IFeedback[];
  pagination: IFeedbackPagination;
}

export interface IFeedbackState {
  entities: IFeedback[];
  isLoading: boolean;
  error: string | null;
  pagination: IFeedbackPagination;
  certain: IFeedbackCertain | null;
}
