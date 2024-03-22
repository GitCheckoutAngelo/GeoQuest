import React from 'react';

interface AfricaRegionMapProps {
  height?: number;
  width?: number;
  countryColor?: string;
  outlineColor?: string;
  countryOpacity?: number;
  outlineOpacity?: number;
}

/**
 * @param {number} height - height of the map region
 * @param {number} width - width of the map region
 * @param {string} countryColor - main color of each country in the region
 * @param {string} outlineColor - outline color of each country in the region
 * @param {number} countryOpacity - opacity of main color of each country in the region
 * @param {number} outlineOpacity - opacity of outline color of each country in the region
 */
function AfricaRegionMap(props: AfricaRegionMapProps) {
  const {
    height = 443.655,
    width = 436.02,
    countryColor = '#9998a3',
    countryOpacity = 1,
    outlineColor = '#eaeaec',
    outlineOpacity = 0.455,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width.toString()}
      height={height.toString()}
      version="1.1"
      viewBox="0 0 436.02 443.655"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-839.875 -338.954) scale(.95436)">
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.2"
          transform="translate(28.025 93.85)"
        >
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1121.2 572l.6 2-.7 3.1.9 3-.9 2.4.4 2.2-11.7-.1-.8 20.5 3.6 5.2 3.6 4-10.4 2.6-13.5-.9-3.8-3-22.7.2-.8.5-3.3-2.9-3.6-.2-3.4 1.1-2.7 1.2-.5-4 .9-5.7 2-5.9.3-2.7 1.9-5.8 1.4-2.6 3.3-4.2 1.9-2.9.6-4.7-.3-3.7-1.6-2.3-1.5-3.9-1.3-3.8.3-1.4 1.7-2.5-1.6-6.2-1.2-4.3-2.8-4.1.6-1.2 2.3-.9 1.7.1 2-.7 16.7.1 1.3 4.7 1.6 3.9 1.3 2.1 2.1 3.3 3.8-.5 1.8-.9 3.1.9.9-1.6 1.5-3.7 3.5-.3.3-1.1h2.9l-.5 2.3 6.8-.1.1 4.1 1.1 2.4-.9 3.9.4 4 1.8 2.4-.4 7.6 1.4-.6 2.4.2 3.5-1z"
            className="Angola"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1055.3 539l-1.5-4.8 2.3-2.8 1.7-1.1 2.1 2.2-2 1.4-1 1.6-.2 2.8z"
            className="Angola"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1154.9 530.4l-.6.1v-.3l-2-6.1-.01-.06-.09-1.04-1.4-2.9 3.5.5 1.7-3.7 3.1.4.3 2.5 1.2 1.5v2.1l-1.4 1.3-2.3 3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1006.7 427l-.2 2.1 1.3 3.8-1.1 2.6.6 1.7-2.8 4-1.7 2-1.1 4 .2 4.1-.3 10.3-4.7.8-1.4-4.4.3-14.8-1.2-1.3-.2-3.2-2-2.2-1.7-1.9.7-3.4 2-.7 1.1-2.8 2.8-.6 1.2-1.9 1.9-1.9h2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M988.5 406l-.5 3.1.8 2.9 3.1 4.2.2 3.1 6.5 1.5-.1 4.4-1.2 1.9-2.8.6-1.1 2.8-2 .7-4.9-.1-2.6-.5-1.8 1-2.5-.5-9.8.3-.2 3.7.8 4.8-3.9-1.6-2.6.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-.4-3.7 1.6-2.7-.2-2.2 4.5-5.3.9-4.4 1.5-1.6 2.7.9 2.4-1.3.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-.9 1.4 1.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3.7-.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 .5-1.2 3.1-.6 2-3.6 1.4-4.5-.3-2.5-1.8-2.3-.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 .7-1.1-2.3.6-3.9-3-6.1-1.4-1 .6-18.7 5.5-.2.8-22.9 4.2-.2 8.7-2.3 2 2.7 3.7-2.5h1.7l3.2-1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1121.3 446.5l3.9 2.5 3.1 2.6.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6.9 2-1.8.7-3.7-.1-4.2-.7-2.1.5-.9 1.6-1.8.2-2.2-1.4-6.3 3.2-2.6-.6-.8.5-1.6 3.9-4.3-1.3-4.1-.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-.5 4.5-3.6-.3-3.9-1.1-3.3 3.4-3 6-.6-1.9-.3-2.9-2.6-2.1-2.1-3.3-.5-2.3-2.7-3.4.5-1.9-.6-2.7.4-5 1.4-1.1 2.8-6.5 4.6-.5 1-1.7 1 .2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-.6-2.2 1.6-.6 5.5.4 5.2-3 4-7 2.8-2.6 3.6-1.1.7 2.7 3.3 4v2.7l-.8 2.6.4 2 1.9 1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-.2 2.6h-2.6l-3.9-1.2H960l-6.7 1.2-3.9 1.8-5.6 2.4-1.1-.2.4-5.3.6-.8-.2-2.5-2.4-2.7-1.8-.4-1.6-1.8 1.2-2.9-.5-3.1.2-1.8h.9l.4-2.8-.4-1.3.5-.9 2.1-.7-1.4-5.2-1.3-2.6.5-2.2 1.1-.5.8-.6 1.5 1h4.4l1-1.8 1 .1 1.6-.7.9 2.7 1.3-.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1072.8 454.2l-2.8 6.5-1.4 1.1-.4 5 .6 2.7-.5 1.9 2.7 3.4.5 2.3 2.1 3.3 2.6 2.1.3 2.9.6 1.9-.4 3.4-4.5-1.5-4.6-1.7-7.1-.2-.7-.4-3.4.8-3.4-.8-2.7.4-9.3-.1.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-.9.1-1.8 1.4-4.6 2.7-6.2h1.6l3.4-3.8 2.1-.1 3.2 2.7 3.9-2.2.5-2.7 1.3-2.6.8-3.2 3-2.6 1.1-4.5 1.2-1.5.8-3.3 1.4-4.1 4.7-5 .3-2.1.6-1.2-2.3-2.5.2-2.1 1.5-.3 2.3 4.1.5 4.2-.2 4.3 3.2 5.8h-3.2l-1.6.4-2.6-.6-1.2 3 3.4 3.8 2.5 1.1.8 2.6 1.8 4.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1141.3 468.2l3.5 5.3 2.6.8 1.5-1.1 2.6.4 3.1-1.3 1.4 2.7 5.1 4.3-.3 7.5 2.3.9-1.9 2.2-2.1 1.8-2.2 3.3-1.2 3-.3 5.1-1.3 2.5-.1 4.8-1.6 1.8-.2 3.8-.8.5-.6 3.6 1.4 2.9.1 1-1.2 10.3 1.5 3.6-1 2.7 1.8 4.6 3.4 3.5.7 3.5 1.6 1.7-.3 1.1-.9-.3-7.7 1.1-1.5.8-1.7 4.1 1.2 2.8-1.1 7.6-.9 6.4 1.5 1.2 3.9 2.5 1.6-1.2.2 6.9h-4.3l-2.2-3.5-2-2.8-4.3-.9-1.2-3.3-3.5 2-4.4-.9-1.9-2.9-3.5-.6-2.7.1-.3-2-1.9-.1-2.6-.4-3.5 1-2.4-.2-1.4.6.4-7.6-1.8-2.4-.4-4 .9-3.9-1.1-2.4-.1-4.1-6.8.1.5-2.3h-2.9l-.3 1.1-3.5.3-1.5 3.7-.9 1.6-3.1-.9-1.8.9-3.8.5-2.1-3.3-1.3-2.1-1.6-3.9-1.3-4.7-16.7-.1-2 .7-1.7-.1-2.3.9-.8-2 1.4-.7.2-2.8 1-1.6 2-1.4 1.5.7 2-2.5 3.1.1.3 1.8 2.1 1.1 3.4-4 3.3-3.1 1.4-2.1-.1-5.3 2.5-6.2 2.6-3.3 3.7-3.1.7-2 .1-2.4.9-2.2-.3-3.7.7-5.7 1.1-4 1.7-3.4.3-3.9.5-4.5 2.2-3.2 3-2.1 4.7 2.2 3.6 2.4 4.1.6 4.3 1.3 1.6-3.9.8-.5 2.6.6 6.3-3.2 2.2 1.4 1.8-.2.9-1.6 2.1-.5 4.2.7 3.7.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1090.9 479.3l-.3 3.9-1.7 3.4-1.1 4-.7 5.7.3 3.7-.9 2.2-.1 2.4-.7 2-3.7 3.1-2.6 3.3-2.5 6.2.1 5.3-1.4 2.1-3.3 3.1-3.4 4-2.1-1.1-.3-1.8-3.1-.1-2 2.5-1.5-.7-2.1-2.2-1.7 1.1-2.3 2.8-4.6-6.8 4.3-3.6-2.1-4.2 2-1.6 3.8-.8.4-2.9 3.1 3.1 5 .3 1.7-3 .7-4.3-.6-5-2.7-3.8 2.5-7.5-1.4-1.2-4.2.5-1.6-3.3.4-2.8 7.1.2 4.6 1.7 4.5 1.5.4-3.4 3-6 3.3-3.4 3.9 1.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3.5-3.2-.1-.2-2-.5-1.8 1.8-3 1.9-2.8 2.4.6 1.7-1.6 1.4 2-.1 2.6-3.1 1.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1031 264.6l-1 3.3 1 6.1-1.1 5.3-3.2 3.6.6 4.8 4.5 3.9.1 1.5 3.4 2.6 2.6 11.5 1.9 5.7.4 3-.8 5.2.4 3-.6 3.5.6 4-2.2 2.7 3.4 4.7.2 2.7 2.1 3.6 2.5-1.2 4.5 3 2.5 4-18.8 12.3-16 12.6-7.8 2.8-6.2.7-.1-4.1-2.6-1.1-3.5-1.8-1.3-3-18.7-14-18.6-14-20.5-15.6.1-1.2.1-.4.1-7.6 8.9-4.8 5.4-1 4.5-1.7 2.1-3.2 6.4-2.5.3-4.8 3.1-.6 2.5-2.3 7.1-1.1 1-2.5-1.4-1.4-1.9-6.8-.3-3.9-1.9-4.1 5.1-3.5 5.8-1.1 3.3-2.6 5.1-2 9-1.1 8.8-.5 2.7.9 4.9-2.5 5.7-.1 2.2 1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1172.1 301.4l3.9 9.4.7 1.6-1.3 2.6-.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-.5.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1.4 4.2 6.8 5.8 1.1 1.3h-65.9l-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-.6 3.9.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1228.9 420.3l-1.7 1.6-2.4-.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-.7-2.5 2-9.5.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1207.3 408.5l3.9.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 .5 1.8.2 2 3.2.1 1.3-.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-.1-15.6 19.3-7.3.3-5 4.5-3.6.1-1.5 2.1h-3.9l-2.3-2.2-5.2 2.7-1.6 2.7-3.8-.6-1.3-.7-1.3.2-1.8-.1-7.2-5.4h-4l-1.9-2.1-.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-.5 1.9-3.6 3-.2.8-1.9-.2-5v-.8l1.5-6.7 2.6-1.8.5-2.6 2.3-5 3.3-3.1 2-6.4.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1060.5 487.3l-.4 2.8 1.6 3.3 4.2-.5 1.4 1.2-2.5 7.5 2.7 3.8.6 5-.7 4.3-1.7 3-5-.3-3.1-3.1-.4 2.9-3.8.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-.3h8.2v-7.7l2.7-.4 3.4.8 3.4-.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M986.5 431.1l-.4 2 2.3 3.3v4.7l.6 5 1.4 2.4-1.3 5.7.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-.8-4.8.2-3.7 9.8-.3 2.5.5 1.8-1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M921.5 421.9l.3 2.4h.9l1.5-.9.9.2 1.6 1.7 2.4.5 1.5-1.4 1.9-.9 1.3-.9 1.1.2 1.3 1.4.6 1.8 2.3 2.7-1.1 1.6-.3 2.1 1.2-.6.7.7-.3 1.9 1.7 1.9-1.1.5-.5 2.2 1.3 2.6 1.4 5.2-2.1.7-.5.9.4 1.3-.4 2.8h-.9l-1.6-.2-1.1 2.6h-1.6l-1.1-1.4.4-2.6-2.4-3.9-1.4.7-1.3.2-1.5.3.1-2.3-.9-1.7.2-1.9-1.2-2.7-1.6-2.3h-4.5l-1.3 1.2-1.6.2-1 1.4-.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-.9-1.4-1.3-.6-2.8-.8-1.4-1.7-1.1 2.6-3.1 1.7.1 1.5-1 1.2-.1.9-.8-.4-2.1.6-.7.1-2.2 2.7.1 4.1 1.5 1.2-.1.4-.7 3.1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M891.6 417.4l.8-2.9 6.1-.1 1.3-1.6 1.8-.1 2.2 1.6h1.7l1.9-1 1.1 1.8-2.5 1.5-2.4-.2-2.4-1.3-2.1 1.5h-1l-1.4.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M909.2 421l-.1 2.2-.6.7.4 2.1-.9.8-1.2.1-1.5 1-1.7-.1-2.6 3.1-2.9-2.6-2.4-.5-1.3-1.8.1-1-1.7-1.3-.4-1.4 3-1 1.9.2 1.5-.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1050.3 487.3v7.7h-8.2l-1.9.3-1.1-.9 1.9-7.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1223.5 476.7l-4.9 7.2.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2.4-.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-.3-3.7-20.5-13.1.4-4.7-1.4-2.5v-.3l1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1.1 3.6 1.9 2.1h4l7.2 5.4 1.8.1 1.3-.2 1.3.7 3.8.6 1.6-2.7 5.2-2.7 2.3 2.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M938.6 452.5l-.2 1.8.5 3.1-1.2 2.9 1.6 1.8 1.8.4 2.4 2.7.2 2.5-.6.8-.4 5.3-1.5.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1.3-1.9 2.6-3.4 2.6-3 1.3-.2 1.4-.7 2.4 3.9-.4 2.6 1.1 1.4h1.6l1.1-2.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1122.6 299.1l-1.7 3.1 1 2.8-1.1 3.9 2 5.2 1.3 22.8 1 23.7.5 12.8h-6.4v2.7l-22.6-12.3-22.5-12.3-5.5 3.5-3.8 2.4-3.2-3.5-8.8-2.8-2.5-4-4.5-3-2.5 1.2-2.1-3.6-.2-2.7-3.4-4.7 2.2-2.7-.6-4 .6-3.5-.4-3 .8-5.2-.4-3-1.9-5.7 2.6-1.4.4-2.8-.6-2.6 3.6-2.5 1.6-2.1 2.6-1.8.1-4.9 6.4 2.2 2.3-.6 4.5 1.1 7.3 2.9 2.8 5.7 4.9 1.2 7.8 2.7 6 3.2 2.5-1.7 2.5-2.9-1.6-4.9 1.5-3.2 3.7-3 3.7-.8 7.4 1.3 2 2.8 2 .1 1.8 1.1 5.4.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1139.1 697.9l-2 .7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M974.8 276l1.9 4.1.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1.6-.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-.1 7.6h-.9l.1 3.4-3.4.2-1.8 1.5h-2.5l-2-.9-4.6.7-1.9 5-1.8.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-.7 2.3-12.5.5h-.1l.3-3 2.2-1.7 1.9-3.4-.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5.1-.1 2.9-2.5 5.1-.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9.1 3.1 2.7 5.1-.4 5.5 1.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1267.9 588.9l.4 7.7 1.3 3-.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9.8 4.7-.7 2.8-1.7 1.4-.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4v-5.7l-1.5-5.1-.2-4.7 1.3-4.6 2.6-1.1.2-2.1 2.9-4.9.8-4.1-1.1-3-.8-4.1-.1-5.9 2.2-3.6 1-4.1 2.8-.2 3.2-1.3 2.2-1.2 2.4-.1 3.4-3.6 4.9-4 1.8-3.2-.6-2.8 2.4.8 3.3-4.4.3-3.9 2-2.9 1.8 2.8 1.4 2.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1010.2 378.8l.1 14.8-3.1 4.3-.4 4-5 1-7.7.5-2 2.3-3.6.3h-3.6l-1.4-1.2-3.1.9-5.3 2.7-1.1 2-4.3 2.8-.8 1.7-2.4 1.3-2.7-.9-1.5 1.6-.9 4.4-4.5 5.3.2 2.2-1.6 2.7.4 3.7-2.4 1-1.3.8-.9-2.7-1.6.7-1-.1-1 1.8h-4.4l-1.5-1-.8.6-1.7-1.9.3-1.9-.7-.7-1.2.6.3-2.1 1.1-1.6-2.3-2.7-.6-1.8-1.3-1.4-1.1-.2-1.3.9-1.9.9-1.5 1.4-2.4-.5-1.6-1.7-.9-.2-1.5.9h-.9l-.3-2.4.3-2-.5-2.4-2-1.8-1.1-3.7-.2-4 1.9-1.2 1-3.8 1.8-.1 3.9 1.8 3.2-1.3 2.1.4.9-1.4 22.5-.1 1.3-4.5-1-.8-2.5-27.7-2.4-27.7 8.5-.1 18.6 14 18.7 14 1.3 3 3.5 1.8 2.6 1.1.1 4.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1166.7 673.5h-4.1l-.3-2.9-.6-2.9-.4-2.3 1.4-7.1-1.1-4.6-2.2-9 6.2-7.3 1.7-4.6.8-.6.9-3.8-.8-1.9.4-4.8 1.3-4.4.4-8.2-2.8-2-2.7-.5-1.1-1.6-2.6-1.3-4.7.1-.2-2.4-.4-4.6 17.2-5.3 3.2 3.1 1.5-.6 2.2 1.6.2 2.6-1.3 3 .2 4.5 3.5 4 1.9-4.5 2.5-1.3-.1-8.3-2.2-4.6-1.9-2.1h-.4l-.6-7.3 1.5-6.1 2.2-.2 6.7 1.8 1.5-.8 3.9-.2 2.1-1.9 3.4.1 6.2-2.5 4.6-3.7.9 2.8-.5 6.4.5 5.7-.2 10 .8 3.1-1.9 4.6-2.4 4.5-3.7 4-5.3 2.4-6.5 3.1-6.6 6.9-2.2 1.2-4.2 4.6-2.3 1.4-.8 4.6 2.4 4.9.9 3.7v2l1-.4-.5 6.3-1.1 3 1.2 1.1-1 2.7-2.4 2.3-4.7 2.1-6.9 3.5-2.5 2.4.3 2.7 1.3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M959.2 341.5l-8.5.1 2.4 27.7 2.5 27.7 1 .8-1.3 4.5-22.5.1-.9 1.4-2.1-.4-3.2 1.3-3.9-1.8-1.8.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8h-3.1l-2.8 1.4-2.7-.5-2 2-.4-3.4 1.6-3.2.8-6-.4-6.4-.6-3.2.6-3.2-1.4-3-2.8-2.8 1.3-2.1h21.7l-.9-9.3 1.5-3.3 5.2-.5.2-16.5 18 .4.2-9.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1182.3 588.9h.4l1.9 2.1 2.2 4.6.1 8.3-2.5 1.3-1.9 4.5-3.5-4-.2-4.5 1.3-3-.2-2.6-2.2-1.6-1.5.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-.1.8 1.8 4.1.2 7.7-1.8 3.6 1.6 4.7-.2 2.8 1.2 1.9-.1 2.4.9 1.4 1-1.6 1.9 2.5.2-.8-1-3.4-1.1-.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1116.2 614.3l4.6-1.4 3.6.3 2.2 1.5v.5l-3.2 1.5h-1.7l-3.7 2.5-2-2.7-8.7 2.3-4.2.2-.8 22.9-5.5.2-.6 18.7-1.1 23.7-5 3.3-2.9.5-3.4-1.2-2.5-.5-.8-2.7-2-1.8-2.8 3.2-3.9-4.9-2-4.6-1-6.3-1.2-4.6-1.6-9.9.1-7.7-.6-3.5-2.1-2.7-2.8-5.3-2.8-7.7-1.1-4-4.4-6.3-.3-4.9 2.7-1.2 3.4-1.1 3.6.2 3.3 2.9.8-.5 22.7-.2 3.8 3 13.5.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1068.6 355l1.6 10 2.2 1.7.1 2 2.4 2.2-1.2 2.8-1.8 13-.2 8.4-7 6-2.3 8.5 2.4 2.4v4.1l3.7.1-.6 3.1-1.5.3-.2 2.1-1 .1-3.9-7-1.4-.3-4.3 3.6-4.4-1.9-3-.3-1.6.9-3.3-.2-3.3 2.7-2.9.2-6.8-3.3-2.7 1.5-2.9-.1-2.1-2.4-5.6-2.4-6.1.8-1.4 1.3-.8 3.7-1.6 2.6-.4 5.8-4.3-3.7h-2l-1.9 1.9.1-4.4-6.5-1.5-.2-3.1-3.1-4.2-.8-2.9.5-3.1 3.6-.3 2-2.3 7.7-.5 5-1 .4-4 3.1-4.3-.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1066.2 421.7l2.3 2.5-.6 1.2-.3 2.1-4.7 5-1.4 4.1-.8 3.3-1.2 1.5-1.1 4.5-3 2.6-.8 3.2-1.3 2.6-.5 2.7-3.9 2.2-3.2-2.7-2.1.1-3.4 3.8h-1.6l-2.7 6.2-1.4 4.6-5.9 2.3-2.1-.3-2.2 1.4-4.5-.1-3.1-4.1-1.9-4.6-4-4.2h-9.2l.3-10.3-.2-4.1 1.1-4 1.7-2 2.8-4-.6-1.7 1.1-2.6-1.3-3.8.2-2.1.4-5.8 1.6-2.6.8-3.7 1.4-1.3 6.1-.8 5.6 2.4 2.1 2.4 2.9.1 2.7-1.5 6.8 3.3 2.9-.2 3.3-2.7 3.3.2 1.6-.9 3 .3 4.4 1.9 4.3-3.6 1.4.3 3.9 7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1158.8 509.1l2.2 3.6-.3 3.8-1.6.8-3.1-.4-1.7 3.7-3.5-.5.6-3.6.8-.5.2-3.8 1.6-1.8 1.4.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M938.9 324.3l-.1.4-.1 1.2-.2 9.8-18-.4-.2 16.5-5.2.5-1.5 3.3.9 9.3h-21.7l-1.3 2.1.3-2.7h.1l12.5-.5.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-.5 1.9-5 4.6-.7 2 .9h2.5l1.8-1.5 3.4-.2-.1-3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1191 409.2l-.7 5.5-2 6.4-3.3 3.1-2.3 5-.5 2.6-2.6 1.8-1.5 6.7v.8l-.8-.2.1-3.2-.8-2.2-2.9-2.5-.9-4.6.6-4.8-2.6-.4-.4 1.4-3.4.4 1.5 1.8.5 3.9-3 3.5-2.7 4.6-2.9.7-4.8-3.7-2.1 1.3-.5 1.8-2.9 1.3-.2 1.3h-5.6l-.8-1.3-4.1-.3-2 1.1-1.6-.5-2.9-3.8-1-1.7-4.1.9-1.5 2.9-1.3 5.8-2 1.2-1.7.7-.5-.3-1.9-1.9-.4-2 .8-2.6V437l-3.3-4-.7-2.7v-1.6l-2.1-1.9-.1-3.7-1.3-2.5-1.9.4.5-2.4 1.4-2.6-.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8.5-1.1-25.5v-2.7h6.4l-.5-12.8h65.9l2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-.3 4.2-2 9.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1178.1 441.1l.2 5-.8 1.9-3 .2-1.9 3.6 3.5.5 3 3.1 1 2.6 2.6 1.5 3.5 7-3.8 4.2-3.4 3.8-3.5 3h-4l-4.5 1.5-3.6-1.5-2.3 1.8-5.1-4.3-1.4-2.7-3.1 1.3-2.6-.4-1.5 1.1-2.6-.8-3.5-5.3-.9-2-4.3-2.6-1.4-3.8-2.4-2.8-3.9-3.3-.1-2.1-3.1-2.6-3.9-2.5 1.7-.7 2-1.2 1.3-5.8 1.5-2.9 4.1-.9 1 1.7 2.9 3.8 1.6.5 2-1.1 4.1.3.8 1.3h5.6l.2-1.3 2.9-1.3.5-1.8 2.1-1.3 4.8 3.7 2.9-.7 2.7-4.6 3-3.5-.5-3.9-1.5-1.8 3.4-.4.4-1.4 2.6.4-.6 4.8.9 4.6 2.9 2.5.8 2.2-.1 3.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M918 408l.2 4 1.1 3.7 2 1.8.5 2.4-.3 2-.8.4-3.1-.5-.4.7-1.2.1-4.1-1.5-2.7-.1-10.4-.3-1.5.8-1.9-.2-3 1-.8-4.9 5.1.1 1.4-.9h1l2.1-1.5 2.4 1.3 2.4.2 2.5-1.5-1.1-1.8-1.9 1h-1.7l-2.2-1.6-1.8.1-1.3 1.6-6.1.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7.5 2.8-1.4h3.1l2.7 1.8 3.6 1.7 3.4 4.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M928.5 447.9l-2.6 3-2.6 3.4-.3 1.9-1.4 2.1-1.5-.5-4-2.6-3-3.4-.9-2.4-.7-4.7 3.1-2.9.6-1.7 1-1.4 1.6-.2 1.3-1.2h4.5l1.6 2.3 1.2 2.7-.2 1.9.9 1.7-.1 2.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1161.7 667.7l.6 2.9.3 2.9-1.4 2.8-3.2.7-3.1-3.5.1-2.2 1.7-2.4.6-1.9 1.7-.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1119.2 376.1l1.1 25.5-4.8-.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 .7 2.7-1.4 2.6-.5 2.4 1.9-.4 1.3 2.5.1 3.7 2.1 1.9v1.6l-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-.4-1.6.6.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-.2-1 1.7-4.6.5.8-1.8-1.8-4.4-.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6.6 1.6-.4h3.2l-3.2-5.8.2-4.3-.5-4.2-2.3-4.1.6-3.1-3.7-.1V412l-2.4-2.4 2.3-8.5 7-6 .2-8.4 1.8-13 1.2-2.8-2.4-2.2-.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M991.4 431.2l-.7 3.4 1.7 1.9 2 2.2.2 3.2 1.2 1.3-.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-.5-3.2 1.3-5.7-1.4-2.4-.6-5v-4.7l-2.3-3.3.4-2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1048.2 289.1l-.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5.6 2.6-.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-.1-1.5-4.5-3.9-.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7.7v3.3l4.4-2.4.4 1.2-2.5 3.2.1 2.9 1.9 1.6-.5 5.6-3.5 3.2 1.2 3.5 2.8.1 1.4 3.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1167 508.4l-.2 3.9-1.1 4.5 1.6 2.5 2.5-1.5 3.3-.4.7.8 3.3-1.6-2.3-2.2 1.9-2.9 2.8-2.9 20.5 13.1.3 3.7 8.1 6.4-2.8 8 .3 3.6 3.5 2.3.2 1.7-1.7 3.9.3 1.9-.4 3.1 1.8 4 2.2 6.4 2 1.4-4.6 3.7-6.2 2.5-3.4-.1-2.1 1.9-3.9.2-1.5.8-6.7-1.8-2.2.2.1-.1-1.8-2.4-.3-6.8-2.9-3.4-.4 1.2-1-1.7-5.5-1.2-3.2-1.9-3.6-1.1-2.2-1.1-.3-.2-2.7-6.6-.4-3.9-4.5-4.4 1.4-2.4-1.1-2.6.2-2.7-1-.9.3-2.8.6-.1 2-2.3 2.3-3.4 1.4-1.3v-2.1l-1.2-1.5-.3-2.5 1.6-.8.3-3.8-2.2-3.6 2-.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1179 474.5l2.7 4.5.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6v.3l-.2-.4-3-1.3-2.4 1.6-3.6.9-2.6 3.7.3 2.5-6.2-.1-2 .8-3.4 2-1.4-.7.1-4.8 1.3-2.5.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-.9.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5h4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1162.1 556.8l.3.2 2.2 1.1 3.6 1.1 3.2 1.9 2.6 2.9 1.3 5.4-1 1.7-1.3 5.2.9 5.4-1.8 2.2-2 6 2.9 1.6-17.2 5.3.4 4.6-4.3.9-3.3 2.5-.8 2.2-2 .6-5.1 5.2-3.2 4.2-1.9.1-1.8-.7-6.2-.7-1-.5v-.5l-2.2-1.5-3.6-.3-4.6 1.4-3.6-4-3.6-5.2.8-20.5 11.7.1-.4-2.2.9-2.4-.9-3 .7-3.1-.6-2 1.9.1.3 2 2.7-.1 3.5.6 1.9 2.9 4.4.9 3.5-2 1.2 3.3 4.3.9 2 2.8 2.2 3.5h4.3l-.2-6.9-1.6 1.2-3.9-2.5-1.5-1.2.9-6.4 1.1-7.6-1.2-2.8 1.7-4.1 1.5-.8 7.7-1.1.9.3-.3 1.4 1.9.5 1.2 1.3 1-.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1159.4 644.7l-2.9-.7-1.9.8-2.7-1.1h-2.2l-3.4-2.9-4.3-1-1.5-4.1.1-2.3-2.3-.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2.7 1.8.7 1.9-.1 3.2-4.2 5.1-5.2 2-.6.8-2.2 3.3-2.5 4.3-.9.2 2.4 4.7-.1 2.6 1.3 1.1 1.6 2.7.5 2.8 2-.4 8.2-1.3 4.4-.4 4.8.8 1.9-.9 3.8-.8.6-1.7 4.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1222.1 512.6l-3.3-5.3-.2-23.4 4.9-7.2 1.5-2.1 3.6-.1 5-4.5 7.3-.3 15.6-19.3-4.8.1-18.7-7.6-2.2-2.3-2.2-3.1-2.2-3.6 1.2-2.2 1.9-3.5 1.9 1.2 1.2 2.7 2.7 2.7h2.8l5.2-1.7 6.1-.7 4.9-2 2.8-.4 2-1.2 3.2-.2 1.8-.2 2.5-.9 3-.7 2.5-2.2h2.2l.2 1.8-.4 3.7.2 3.4-1.1 2.3-1.4 7-2.4 7.1-3.3 8.2-4.6 9.4-4.7 7.2-6.6 8.8-5.6 5.2-8.4 6.4-5.3 4.8-6.2 7.8-1.3 3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1159.4 644.7l2.2 9 1.1 4.6-1.4 7.1.4 2.3-2.7-1.1-1.7.4-.6 1.9-1.7 2.4-.1 2.2 3.1 3.5 3.2-.7 1.4-2.8h4.1l-1.7 4.7-1 5.3-1.7 2.9-4 3.3-1.1.9-2.6 3.3-1.8 3.3-3.5 4.6-6.7 6.6-4.1 3.8-4.3 3-5.9 2.4-2.7.4-.9 1.8-3.2-1-2.7 1.2-5.7-1.2-3.3.8-2.2-.4-5.8 2.6-4.6 1-3.5 2.4-2.4.2-2.1-2.3-1.8-.1-2.2-2.9-.3.9-.6-1.7.3-3.8-1.5-4.3 1.8-1.2.1-4.9-3.3-6-2.4-5.4v-.1l-3.6-8.3 2.8-3.2 2 1.8.8 2.7 2.5.5 3.4 1.2 2.9-.5 5-3.3 1.1-23.7 1.4 1 3 6.1-.6 3.9 1.1 2.3 4-.7 2.8-2.9 2.7-1.9 1.5-3.1 2.8-1.4 2.3.7 2.5 1.8 4.5.3 3.6-1.4.6-2 1.2-3.1 3-.5 1.8-2.4 2-4.3 5.2-4.8 8.1-4.7h2.2l2.7 1.1 1.9-.8zm-20.3 53.2l1.1-2 3.1-1 1.1-2.1 1.9-3.1-1.7-2-2.2-2-2.7 1.4-3.1 2.5-3.2 4 3.7 5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1233.2 581.3l-.9-.1-.2-.4v-.3l.5.1.7.5z"
            className="Comoros"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1236.9 579.4l.2 1v.7l-.1.2-.2-.3-.4-.3-.1-.2-.3-.1-.6-.4.1-.1.5.2.3-.1.2-.4v-.2l.3-.1z"
            className="Comoros"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1231.2 578.4l-.5-.4-.3-.1-.3-.2-.2-.6.1-.3v-.2l.2-1.2-.1-.1.2-.4.5-.1.2.3-.2 1.2.1.3.2.4.1.5.2.6z"
            className="Comoros"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M853.2 403.5l.2.1v.2l.2.2.4.5h.2l.2.3.2.5.2.2-.3.5-.3.1-.5-.1-.3-.1-.3-.3v-.2l-.2-.1-.1-.4.1-.2v-.3l.2-.4-.2-.5z"
            className="Cape Verde"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M856.3 403.5l.3.1.1.6-.1.4-.4.2-.4-.4.2-.4-.1-.2z"
            className="Cape Verde"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M858.3 397.8l.3-.2.5.2.1.2v.7l-.4.3-.3.2h-.3l-.5-.2v-.5l.2-.2v-.6l.1-.1z"
            className="Cape Verde"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M858.1 394.5l.1.1-.1.6-.2.1v-.5l-.2-.3v-.3l-.1-.3.4-.3.2.2-.1.6z"
            className="Cape Verde"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1307.7 630.8l.4.9-.2.6-.4.4.1.3-.3.3-.5.2h-.5l-.6-.1-.1.1-.3-.3.2-.2.1-.4.1-.7.2-.4.5-.4.1-.2.2-.5.4-.3.4.1z"
            className="Mauritius"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1023.9 501.3h-.2l-.2.3h-.2l-.1-.4-.2-.8v-.3l.4-.5.3-.1.3-.3.4.1.2.4.1.3-.1.4-.2.3-.3.4z"
            className="São Tomé and Principe"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1028.5 491.5l-.1.3-.2.1-.3-.1v-.3l.2-.1v-.3l.2-.2.3.1z"
            className="São Tomé and Principe"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1249 562.1l-.3.2h-.5l-.4.2h-.4v-.2h.5l.4-.1.4-.3h.2z"
            className="Seychelles"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1248.5 561.8l-.2.1h-.4v-.2z"
            className="Seychelles"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1300.4 531.5l.4.4-.2.3-.2-.3-.3-.2.2-.5z"
            className="Seychelles"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M908.4 321.2l-.3.4-.4.1-.3-.1h-.4v-.2h.3l.6-.2.4-.3.3-.3.1-.5.1-.3.2-.5.3-.4.3-.6.2-.8.2-.2.4-.1.3.3.1.5-.1.5-.1.5v.5l-.1.1-.3.7-.3.3-.6.1-.7.3z"
            className="Canary Islands (Spain)"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M912.9 314.7v.4l-.2.5-.7.5-.5.1-.4.5-.5-.2v-.1l.2-.4v-.4l.2-.3.3-.2h.3l.3-.3h.5l.1-.1.2-.5.2-.1.2.2z"
            className="Canary Islands (Spain)"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1240.2 583.1l.2.3.5.2v.3l-.2.2.1.2-.3.6.1.2-.3.1-.2-.3v-.3l.2-.2-.2-.7-.1-.1-.1-.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1295 635.8h.4l.4.2.3.3v.3l.1.5.3.2.2.2.1.2-.2.6-.1.4-.2.2-.4.1h-.9l-.2-.2-.8-.4-.3-.5v-.3l-.3-.6.1-.4.2-.2.2-.4h.1l.5-.2z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default AfricaRegionMap;
