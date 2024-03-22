import { Countries } from './countries';
import { Regions } from './regions';

export type MarkersModel = {
  [key in Regions]: Countries[];
};
