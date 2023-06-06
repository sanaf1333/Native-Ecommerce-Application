import {ratingModal} from './rating-modal';
export interface productModal {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: ratingModal;
}
