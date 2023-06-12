import {ratingModal} from './rating-modal';
export interface productModal {
  id?: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating?: ratingModal;
}
