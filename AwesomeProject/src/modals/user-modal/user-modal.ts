import {addressModal} from './address-modal';
import {nameModal} from './name-modal';
export interface userModal {
  address: addressModal;
  id: string;
  email: string;
  username: string;
  password: string;
  name: nameModal;
  phone: string;
}
