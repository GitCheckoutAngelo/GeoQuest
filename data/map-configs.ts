import { MapConfig } from '@/models/map-config-model';

// Edit this file to change how the map looks for certain regions

export const mapConfigs: MapConfig = {
  ['north-america']: {
    1200: {
      projectionConfig: {
        rotate: [80, -45, 0],
        scale: 900,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [80, -45, 0],
        scale: 790,
      },
    },
    900: {
      projectionConfig: {
        rotate: [80, -45, 0],
        scale: 680,
      },
    },
    750: {
      projectionConfig: {
        rotate: [80, -45, 0],
        scale: 580,
      },
    },
    600: {
      projectionConfig: {
        rotate: [80, -45, 0],
        scale: 470,
      },
    },
  },
  ['south-america']: {
    1200: {
      projectionConfig: {
        rotate: [62.5, 21, 0],
        scale: 900,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [62.5, 21, 0],
        scale: 800,
      },
    },
    900: {
      projectionConfig: {
        rotate: [62.5, 20, 0],
        scale: 700,
      },
    },
    750: {
      projectionConfig: {
        rotate: [62.5, 20, 0],
        scale: 590,
      },
    },
    600: {
      projectionConfig: {
        rotate: [62.5, 19.5, 0],
        scale: 480,
      },
    },
  },
  europe: {
    1200: {
      projectionConfig: {
        rotate: [-10.0, -53.0, 0],
        scale: 1800,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [-10.0, -53.0, 0],
        scale: 1600,
      },
    },
    900: {
      projectionConfig: {
        rotate: [-10.0, -53.0, 0],
        scale: 1400,
      },
    },
    750: {
      projectionConfig: {
        rotate: [-10.0, -53.0, 0],
        scale: 1200,
      },
    },
    600: {
      projectionConfig: {
        rotate: [-10.0, -53.0, 0],
        scale: 1000,
      },
    },
  },
  africa: {
    1200: {
      projectionConfig: {
        rotate: [-15.0, -2, 0],
        scale: 900,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [-15.0, -2, 0],
        scale: 800,
      },
    },
    900: {
      projectionConfig: {
        rotate: [-15.0, -2, 0],
        scale: 690,
      },
    },
    750: {
      projectionConfig: {
        rotate: [-15.0, -2, 0],
        scale: 580,
      },
    },
    600: {
      projectionConfig: {
        rotate: [-15.0, -2, 0],
        scale: 470,
      },
    },
  },
  asia: {
    1200: {
      projectionConfig: {
        rotate: [-92.5, -35.0, 0],
        scale: 800,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [-92.5, -35.0, 0],
        scale: 700,
      },
    },
    900: {
      projectionConfig: {
        rotate: [-92.5, -35.0, 0],
        scale: 600,
      },
    },
    750: {
      projectionConfig: {
        rotate: [-92.5, -35.0, 0],
        scale: 500,
      },
    },
    600: {
      projectionConfig: {
        rotate: [-92.5, -35.0, 0],
        scale: 400,
      },
    },
  },
  oceania: {
    1200: {
      projectionConfig: {
        rotate: [-144, 18, 0],
        scale: 1000,
      },
    },
    1050: {
      projectionConfig: {
        rotate: [-144, 18, 0],
        scale: 900,
      },
    },
    900: {
      projectionConfig: {
        rotate: [-144, 18, 0],
        scale: 800,
      },
    },
    750: {
      projectionConfig: {
        rotate: [-144, 18, 0],
        scale: 700,
      },
    },
    600: {
      projectionConfig: {
        rotate: [-144, 18, 0],
        scale: 600,
      },
    },
  },
};
