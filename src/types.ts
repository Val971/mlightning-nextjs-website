export interface IItem {
  id: number;
  number?: string;
  url: string;
  title: string;
  description: string;
  duration?: number;
}
export interface IService {
  id: number;
  url: string;
  title: string;
  description: string;
  details: IDetail[];
}
interface IDetail {
  id: number;
  title: string;
  description: string;
  url?: string;
}
export interface IReview {
  author_name: string;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

export interface IPlace {
  reviews: IReview[];
}
