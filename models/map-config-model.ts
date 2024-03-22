import { Regions } from './regions';

export type MapConfig = {
  [key in Regions]: {
    [key: number]: { projectionConfig: { rotate: [number, number, number]; scale: number } };
  };
};
