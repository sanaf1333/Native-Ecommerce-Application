import {geolocationModal} from './geolocation-modal';
export interface addressModal {
  geolocation: geolocationModal;
  city: string;
  street: string;
  number: string;
  zipcode: string;
}
