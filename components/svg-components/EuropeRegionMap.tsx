import React from 'react';

interface EuropeRegionMapProps {
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
function EuropeRegionMap(props: EuropeRegionMapProps) {
  const {
    height = 257.269,
    width = 387.539,
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
      viewBox="0 0 387.539 257.269"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-867.933 -99.791) scale(.95436)">
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
            d="M1088 228l.4 1.2 1.4-.6 1.2 1.7 1.3.7.6 2.3-.5 2.2 1 2.7 2.3 1.5.1 1.7-1.7.9-.1 2.1-2.2 3.1-.9-.4-.2-1.4-3.1-2.2-.7-3 .1-4.4.5-1.9-.9-1-.5-2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1230.8 253l-1.8.2-2.8-3.7-.2-1h-2.3l-1.9-1.7-1 .1-2.4-1.8-4.2-1.6-.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1070.6 190.8l-.3.8.7 2.1-.2 2.6h-2.8l1.1 1.4-1.3 4-.9 1.1-4.4.1-2.4 1.5-4.2-.5-7.3-1.7-1.3-2.1-4.9 1.1-.5 1.2-3.1-.9-2.6-.2-2.3-1.2.7-1.5-.2-1.1 1.4-.3 2.7 1.7.6-1.7 4.4.3 3.5-1.1 2.4.2 1.7 1.3.4-1.1-1-4.1 1.7-.8 1.6-2.9 3.8 2.1 2.6-2.6 1.7-.5 4 1.9 2.3-.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1229 253.2l-3.8-.9-3.2-2.9-1.2-2.5 1-.1 1.9 1.7h2.3l.2 1z"
            className="Azerbaijan"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1235.3 236.2l2.5-2.6 3.5 3.3 3.6 4.6 2.5.3 1.9 1.7-4.2.5.1 5-.4 2.2-1.7 1.5.8 3.1-1.3.4-3.9-3.4 1.2-3.1-1.9-1.9-1.9.5-5.3 4.7-.9-4.5-2.5-1-2.6-1.7 1.1-2.1-3.2-2.2.7-1.6-2.2-1.1-1.4-1.6 1.1-1.1 4.2 1.9 2.9.3.6-.7-3.3-3.5 1.2-.8 1.5.2 4.3 3.8 2.4.5z"
            className="Azerbaijan"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1016.5 177.1l-.4 4.2-1.3.2-.4 3.5-4.4-2.9-2.5.5-3.5-2.9-2.4-2.5-2.2-.1-.8-2.2 3.9-1.2 3.6.5 4.5-1.3 3.1 2.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-.8-5 2 .3 3.2-4.6.6-3.9-2.3-4 1.8-3.8-.2-.8-4.2-2.8-2.1.7-.8-.6-.8.6-2 1.8-2-2.8-2.7-.7-2.4 1.1-1.4 1.8 2.6 1.9-.4 4 .9 7.6.4 2.3-1.6 5.9-1.5 4 2.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1083 214.3l1.9-.1-1.1 2.8 2.7 2.5-.5 2.9-1.1.3-.9.6-1.6 1.5-.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 .8-2.6 2 1.5 1-1.4 2.3-.1 4.5 1.1 3.5-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1141.6 162.7l-3.9-.2-.8.6 1.5 2 2 4-4.1.3-1.3 1.4.3 3.1-2.1-.6-4.3.3-1.5-1.5-1.7 1.1-1.9-.9-3.9-.1-5.7-1.5-4.9-.5-3.8.2-2.4 1.6-2.3.3-.5-2.8-1.9-2.8 2.8-1.3-.4-2.4-1.7-2.3-.6-2.7h4.7l4.8-2.3.5-3.4 3.6-2-1-2.7 2.7-1 4.6-2.3 5.3 1.5.9 1.5 2.4-.7 4.8 1.4 1.1 2.9-.7 1.6 3.8 4 2.1 1.1v1.1l3.4 1.1 1.7 1.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1034.4 197.5l.2 1.1-.7 1.5 2.3 1.2 2.6.2-.3 2.5-2.1 1.1-3.8-.8-1 2.5-2.4.2-.9-1-2.7 2.2-2.5.3-2.2-1.4-1.8-2.7-2.4 1v-2.9l3.6-3.5-.2-1.6 2.3.6 1.3-1.1h4.2l1-1.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1059.7 175.2l2.5 2 3.7.5-.2 1.7 2.8 1.3.6-1.6 3.4.7.7 2 3.7.3 2.6 3.1h-1.5l-.7 1.1-1.1.3-.2 1.4-.9.3-.1.6-1.6.6-2.2-.1-.6 1.4-2.4-1.2-2.3.3-4-1.9-1.7.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-.2 2.2 2.4 3.9-2.2.6-1.3-.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7.8 1 4.1-.4 1.1-1.7-1.3-2.4-.2-3.5 1.1-4.4-.3-.6 1.7-2.7-1.7-1.4.3-5.5-1.9-1 1.3h-4.2l.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6.2-2.7-1-1.4.4-4.2-1.1-6.5h2.9l1.2-2.3.9-5.6-.9-2.1.8-1.3 4-.3 1 1.3 3.1-3-1.3-2.3-.4-3.4 3.7.8 2.9-.9.3 2.3 4.9 1.4.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1046.1 147.7l-2.4 4.9-5.2-3.5-.9-2.5 6.8-2z"
            className="Denmark"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1033.3 151.5l-2.9.9-3.7-.8-2.1-3.4-.4-6.1.6-1.7 1.3-1.8 4-.3 1.6-1.7 3.6-1.7v3.1l-1.2 2 .7 1.6 2.6.9-1 2.3-1.4-.6-3.1 4.3z"
            className="Denmark"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1113.7 124.6l.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-.1-4.4-2.2-2.1-.7-3.8 1-.1-3.5-1.5.8-3.3-2.1-1-3.4 5.5-1.7 5.6-.8 5.1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1104.1 70.1l.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-.9 3.8 7.4 3.9-.9 2.9-3.4 3.4-8 7.4-8 .5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M956.7 158.2l-3.5-1.2-3 .1 1.2-3.3-.9-3.2 4-.3 4.9 3.8z"
            className="United Kingdom"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M972.6 129.5l-5.1 6.5 4.7-.8h5.1l-1.3 4.9-4.3 5.4 4.9.3.3.7 4.2 7.1 3.2 1 2.9 7 1.4 2.4 5.9 1.1-.6 4-2.4 1.8 1.9 3.2-4.4 3.2-6.5-.1-8.4 1.8-2.2-1.3-3.3 2.9-4.5-.7-3.6 2.4-2.5-1.2 7.3-6.5 4.4-1.4-7.6-1-1.3-2.5 5.1-1.9-2.5-3.3 1-4 7.1.6.8-3.6-3.1-3.7-.1-.1-5.7-1.1-1.1-1.6 1.8-2.7-1.5-1.7-2.6 2.9-.1-5.9-2.2-3 1.9-6.2 3.8-4.8 3.6.4z"
            className="United Kingdom"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2.8 3.3 3.5-.6.7-2.9-.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5.3.3-2.7-2.1-4.3-3.4-2.4-3-.7-2.2-1.9.4-.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1112.7 272.6l3.1 2.2 4.1-.4 4 .4v1.2l2.8-.8-.5 1.9-7.6.5-.1-1-6.6-1.3z"
            className="Greece"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1121.9 239.9l-3.2-.2-2.7-.6-6.2 1.6 4 3.6-2.5 1.1h-2.9l-3.1-3.3-.9 1.4 1.6 3.8 2.9 3-1.9 1.4 3.2 2.9 2.8 1.9.4 3.6-5-1.7 1.8 3.3-3.3.6 2.5 5.7-3.5.1-4.6-2.8-2.4-5.1-1.3-4.3-2.3-2.9-3-3.7-.5-1.8 2.2-3.1.1-2.1 1.7-.9-.1-1.7 3.4-.5 1.8-1.4 2.8.1.8-1.1 1-.2 3.8.2 4-1.8 3.9 2.3 4.6-.6-.3-3.2 2.7 1.7-1.1 4z"
            className="Greece"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5.1-4.5-1.1-2.3.1-1 1.4-2-1.5-.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-.5-2.5-2.7-.3-2.1-3.3-1-1.4 2.7-1.6-2.1v-2.2l.1-.1 3.6.2.8-1 1.8 1 2 .1-.1-1.7 1.7-.7.3-2.5 3.9-1.7 1.6.8 4 2.7 4.3 1.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1096.2 191.9l3 1.7.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-.8-1.2-2.1-.8-.1 1.3-4-1.1-1.4h2.8l.2-2.6 2.7 1.7 1.9.6 4.1-.7.3-1.3 1.9-.2 2.3-.9.6.4 2.3-.8 1-1.5 1.6-.4 5.5 1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M956.7 158.2l.7 4.4-3.9 5.5-8.8 3.6-6.8-.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8.9 3.2-1.2 3.3 3-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-.9-11.9-1.8L892 96l-9-2.7 7.9-1.1.1-1.7-8.8-1.3 3.6-3.7 6.6-.8 6 3.8 7-3 5.1 1.5 7.3-2.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1068.2 256.4l-1.7 5.1.9 1.9-.9 3.3-4.2-2.4-2.7-.7-7.5-3.2.5-3.3 6.2.6 5.4-.7z"
            className="Italy"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1034.2 237.4l3.3 4.5-.4 8.5-2.4-.4-2.1 2.1-2-1.7-.5-7.7-1.3-3.6 2.9.3z"
            className="Italy"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1055.9 203.9l-.4 3.1 1.4 2.7-4.1-1-3.9 2.3.4 3.1-.5 1.8 1.9 3.2 5 3.2 2.9 5.3 6.1 5.1 4-.1 1.4 1.4-1.4 1.3 4.8 2.3 4 1.9 4.7 3.4.6 1.1-.8 2.3-3.1-3-4.6-1-1.9 4.1 3.9 2.4-.4 3.3-2.1.4-2.5 5.5-2.2.5-.1-2 .9-3.4 1.1-1.4-2.3-3.7-1.8-3.2-2.2-.8-1.8-2.7-3.4-1.2-2.4-2.6-3.8-.4-4.3-2.8-4.9-4.2-3.7-3.6-1.9-6.3-2.6-.7-4.2-2.1-2.3.8-2.9 3-2.1.4.5-2.7-2.8-.8-1.5-4.9 1.7-1.9-1.5-2.4.1-1.8 2.2 1.4 2.5-.3 2.7-2.2.9 1 2.4-.2 1-2.5 3.8.8 2.1-1.1.3-2.5 3.1.9.5-1.2 4.9-1.1 1.3 2.1z"
            className="Italy"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1111.1 147.6l1 2.7-3.6 2-.5 3.4-4.8 2.3h-4.7l-1.4-1.9-2.5-.7-.6-1.5.2-1.7-2.2-.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9.4 4.5-.6.9 1.2 2.5.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1016.9 185.4l-1.4.1-1.1-.5.4-3.5 1.3-.2 1 1.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-.4-.9-1.2-4.5.6-7.9-.4-5.1 1.8-.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-.2.1-4.6 3.8-1 2.1.7 4.4 2.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1129.4 210.3l-1.3-2.9.2-2.7-.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-.7 1.1-.9 3.2-.6 4 1.9 2 .3 2.6 1.7-.1 2.1 2 1 1.1 2.6 2 1.6-.2 1 1 .6-1.3.5-3-.2-.6-.9-1 .5.6 1.1-1.1 2.1-.6 2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1105.5 236.6l-1 .2-.8 1.1-2.8-.1-1.8 1.4-3.4.5-2.3-1.5-1-2.7.5-2.2.7.1.1-1.3 2.9-1 1.2-.3 1.7-.3 2.4-.2 2.8 2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1090.6 227.2l-.8 1.4-1.4.6-.4-1.2-1.9 3.1.5 2.1-1.1-.5-1.7-2.1-2.3-1.3.5-1 .4-3.5 1.6-1.5.9-.6 1.4 1.1.9.9 1.7.7 2.1 1.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1113.7 67.5l-6.4 2.1-3.2.5.8-3.8-5.8-2.1-5.9 1.8-1.1 4-3.4 2.4-4.7-1.3-5.3.2-5.1-2.8-2.2 1.4-2.6.2.1 3.6-8-.9-.6 3.1h-4l-2.3 3.9-3.4 6.1-5.7 7.9 1.8 2-1.3 2.2-4.3-.1-2.4 5.4 1 7.7 3.1 2.9-.8 6.9-3.4 4-1.8 3.4-3.3-3.6-8.6 6.8-6.1 1.4-6.5-3-1.8-6.3-2-13.5 4-3.7 11.3-4.9 8.1-5.9 7.2-7.8L1048 77l6.4-4.1 10.3-6.8 8.5-2.4 6.7.3 5.2-4.4 7.4.2 7-1 13.7 3.9-4.9 1.4z"
            className="Norway"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1076.6 25.2l-7.6 1.9-6.8-1.1 2.2-1.2-2.6-1.5 7.3-.9 1.9 1.7z"
            className="Norway"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1051 16.7l12.6 3.4-8.6 1.8-1.2 3.4-3 .9-.9 4-4.4.2-8.5-2.9 3-1.7-5.7-1.4-7.7-3.9-3.2-3.5 9.3-1.6 2.3 1.5h5l1-1.5 5.2-.2z"
            className="Norway"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1075.4 13.7l7.4 1.5-4.4 2.4-10.1.5-10.7-.8-1-1.2h-5.1l-4.3-2 10.5-1.2 5.4 1 3.1-1.3z"
            className="Norway"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1079.9 154.8l5.9.7 8.8-.1 2.5.7 1.4 1.9.6 2.7 1.7 2.3.4 2.4-2.8 1.3 1.9 2.8.5 2.8 3.2 5.4-.3 1.7-2.3.7-3.8 5.2 1.6 2.8-1.1-.4-5-2.4-3.5.9-2.4-.6-2.8 1.3-2.7-2.2-1.9.9-.3-.4-2.6-3.1-3.7-.3-.7-2-3.4-.7-.6 1.6-2.8-1.3.2-1.7-3.7-.5-2.5-2-2.4-3.9.2-2.2-1.5-3.3-1.9-2.1 1.2-1.7-1.4-3.1 3.1-1.8 7.1-2.8 5.8-2 4.8 1 .6 1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1118.9 193.1l1.6.7 1.8 1.8 2 2.6 3.4 3.8.6 2.7-.2 2.7 1.3 2.9 2.4 1.2 2.3-1.1 2.4 1.1.4 1.7-2.3 1.3-1.6-.6-.4 7.7-3.1-.7-4-2.3-5.9 1.5-2.3 1.6-7.6-.4-4-.9-1.9.4-1.8-2.6-1-1.1 1-1.1-1.3-.7-1.5 1.4-3.1-1.9-.7-2.6-3.2-1.4-.8-2.1-3-2.4 3.9-1.2 2.6-4.3 1.9-4.2 2.9-1.3 2-1.4 3.2.7h3.2l2.5 1.6 1.6-1 3.6-.6 1-1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1102 218.2l-1.1 1.4.7 2.4 2.8 2.7-1.8 2-.6 2 .6.8-.7.8-2.4.2-1.7.3-.3-.5.6-.7.4-1.6-.7.1-1.1-1.2-.9-.3-.8-1-1-.4-.8-.9-.9.4-.5 2.1-1.2.4.4-.5-2.1-1.3-1.7-.7-.9-.9-1.4-1.1 1.1-.3.5-2.9-2.7-2.5 1.1-2.8-1.9.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2.3 3 2.4.8 2.1 3.2 1.4.7 2.6 3.1 1.9 1.5-1.4 1.3.7-1 1.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1098.1 187.7l-1.2 1.7-.7 2.5-1 .6-5.5-1.9-1.6.4-1 1.5-2.3.8-.6-.4-2.3.9-1.9.2-.3 1.3-4.1.7-1.9-.6-2.7-1.7-.7-2.1.3-.8.6-1.4 2.2.1 1.6-.6.1-.6.9-.3.2-1.4 1.1-.3.7-1.1h1.5l.3.4 1.9-.9 2.7 2.2 2.8-1.3 2.4.6 3.5-.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1069.8 203.9l-3.9 1.7-.3 2.5-1.7.7.1 1.7-2-.1-1.8-1-.8 1-3.6-.2 1.1-.5-1.4-2.7.4-3.1 4.2.5 2.4-1.5 4.4-.1.9-1.1.8.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1088.2 87l-7 1.6-3.5 3.9 1.3 3.5-6.2 4.5-7.8 5-2.1 8.1 3.7 4.1 4.8 3.3-3.3 6.6-4.6 1.4-.6 10-2.1 5.7-5.7-.6-2.2 4.8-5.5.3-1.9-5.7-4.5-6.9-4.2-8.4 1.8-3.4 3.4-4 .8-6.9-3.1-2.9-1-7.7 2.4-5.4 4.3.1 1.3-2.2-1.8-2 5.7-7.9 3.4-6.1 2.3-3.9h4l.6-3.1 8 .9-.1-3.6 2.6-.2 6 2.7 7.2 3.7 1.8 8.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1201.7 235.3l5.5-.3 5.6 3.2 1.3 2.2.1 3.1 4.2 1.6 2.4 1.8-3.3 1.9 2.9 7.3-.7 2 3.8 5.1-2.4 1.1-2.1-1.6-6.3-.9-2.1 1-5.9 1-2.9-.1-5.7 2.4h-4.4l-3-1.2-5.6 1.8-1.9-1.2.2 3.5-1.2 1.4-1.3 1.4-2.3-2.9 1.7-2.4-3.2.6-4.6-1.5-3.2 3.7-8 .7-4.7-3.4-5.7-.2-1 2.6-3.6.8-5.4-3.4-5.8.1-3.8-6.4-4.2-3.5 2-5-3.6-3.1 5.1-6.1 8-.2 1.6-4.9 10 .9 5.6-4.1 5.8-1.8 8.5-.2 9.8 4.5 7.9 2.5 5.8-1 4.6.6z"
            className="Turkey"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1121.9 239.9l1.2-.7 1.1-4-2.7-1.7 5-2 4.6.8.9 2.5 4.8 2-.7 1.6-6.2.3-2 2-3.9 3.4-2-2.9z"
            className="Turkey"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1157.2 174.6l2.3 2.7.1 1.2 6.7 2.2 3.6-1 3.6 2.9 2.9-.1 7.7 2 .4 1.9-1.3 3.2 1.8 3.5-.3 2.1-4.8.4-2.2 1.8.4 2.7-3.9.5-3 2.1-4.6.3-4 2.4 1 3.9 2.8 1.5 5.1-.4-.6 2.3-5.4 1.1-6.3 3.6-3.1-1.3.7-2.9-5.9-1.9.7-1.2 4.6-2.1-1.7-1.4-8.1-1.6-.8-2.4-4.5.8-1.3 3.5-3.3 4.6-2.4-1.1-2.3 1.1-2.4-1.2 1.2-.7.6-2.1 1.1-2.1-.6-1.1 1-.5.6.9 3 .2 1.3-.5-1-.6.2-1-2-1.6-1.1-2.6-2-1 .1-2.1-2.6-1.7-2-.3-4-1.9-3.2.6-1.1.9h-2.1l-1 1.5-3.6.6-1.6 1-2.5-1.6h-3.2l-3.2-.7-2 1.4-.5-1.7-3-1.7.7-2.5 1.2-1.7 1.1.4-1.6-2.8 3.8-5.2 2.3-.7.3-1.7-3.2-5.4 2.3-.3 2.4-1.6 3.8-.2 4.9.5 5.7 1.5 3.9.1 1.9.9 1.7-1.1 1.5 1.5 4.3-.3 2.1.6-.3-3.1 1.3-1.4 4.1-.3 1.8.2 1-1.4 1.5.3 4.9-.6 3.8 3.5-.9 1.3.8 1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1097.8 230.8l-1.2.3-2.9 1-.1 1.3-.7-.1-.6-2.3-1.3-.7-1.2-1.7.8-1.4 1.2-.4.5-2.1.9-.4.8.9 1 .4.8 1 .9.3 1.1 1.2.7-.1-.4 1.6-.6.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-.5 2.5-1.7 4-9 6.5-2.6 4 .2.9 2.1-.9 5.6-1.2 2.3h-2.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M946.9 263.7l-2.2 1.6-2.8-.9-2.7.7.9-5-.3-3.9-2.4-.6-1.1-2.4.5-4.2 2.2-2.3.5-2.6 1.2-3.8v-2.7l-.9-2.3-.2-2.2 1.9-1.6 2.2-.9 1.2 3.1h3l.9-.8 3.1.2 1.3 3.2-2.4 1.7-.3 5-.8.9-.3 3.1-2.3.5 2 3.8-1.6 4.2 1.8 1.9-.8 1.7-2 2.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1094.6 155.4l-8.8.1-5.9-.7.7-2.6 6.3-2 5.1 1.1 2.2.9-.2 1.7z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1218.8 61.3l-2.2.4-13.5-.7-2.3-2.3-7.9-1.4-2-2.9 3.5-1.1-1.6-2.8 5.4-4.4-4-.6 6.7-4.5-2.5-2.3 6.8-2.6 10.3-3.2 11.7-.9 5-1.8 6.7-.6 4.2 1.9-1.3 1.5-11.4 2.5-9.9 2.3-8.7 4.8-2.8 5-3.3 5 3.1 4.3z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1281.26 157.195l-1.66.205-1.4 2.1 5.1 4.2-4 1.6 1.5 1.6-3.5 3 9.4 4.3-.2 2.9-7-.3-.8 1.9-7.3-3.2-7.7.1-4.4 2.6-6.6-2.5-12-4.3-7.6.2-8.1 6.7.6 4.5-6-3.6-2.2 6.9 1.8 1.2-1.7 4.8 5.3 4.2 3.6-.2 4.3 4.2.2 3.2 2.8 1.1-1.4 3.7-4.6 1-3.6 6.5 6 6.1.4 4.2 7.3 7.5-2.5 2.6-.6 1.6-2.4-.5-4.3-3.8-1.5-.2-3.6-1.5-2.1-2.6-5.1-1.3-2.9 1-1.2-1.2-7.6-3.1-7.7-1-4.6-1.1-.4.8-7.6-5.4-6.2-2.4-5.1-3.7 3.6-1 3.2-5.2-3.3-2.5 6.9-2.6-.4-1.4-4.3 1-.4-2.7 2.2-1.8 4.8-.4.3-2.1-1.8-3.5 1.3-3.2-.4-1.9-7.7-2-2.9.1-3.6-2.9-3.6 1-6.7-2.2-.1-1.2-2.3-2.7-3.9-.3-.8-1.9.9-1.3-3.8-3.5-4.9.6-1.5-.3-1 1.4-1.8-.2-2-4-1.5-2 .8-.6 3.9.2 1.6-1.3-1.7-1.6-3.4-1.1v-1.1l-2.1-1.1-3.8-4 .7-1.6-1.1-2.9-4.8-1.4-2.4.7-.9-1.5-5.3-1.5-2.1-3.6-1-2.9-2.5-1.3 1.6-1.9-2.4-5.6 2.6-3.4-.9-1 4.5-3.3-5.4-2.8 8-7.4 3.4-3.4.9-2.9-7.4-3.9.9-3.8-4.9-4.2 1.7-4.8-6.5-6.3 2.9-4.2-7.3-3.7-.4-3.8 3.2-.5 6.4-2.1 3.7-1.9 7.7 3.2 11.7 1.3 17.7 6.2 4.1 2.6 1.5 3.7-3.7 2.9-6.5 1.5-20.2-4.2-2.9.7 8.1 4.1 1 2.6 1.9 5.8 6.1 1.7 3.8 1.5-.2-2.8-3.4-2.4 2.1-2.2 11.6 3.6 3.2-1.4-4.3-4.2 8.1-5.4 4.1.3 4.6 1.9 1.1-3.8-4.7-3.3.8-3.3-4.3-3.4 12.3 1.8 3.6 3-5.1.7 1.2 3.1 4.1 1.9 6-1.2-.4-3.5 7.7-2.7 12.4-4.6 3.2.2-2.5 3.3 5.4.6 2.1-1.9 7.7-.1 5-2.3 6.4 3.3 2.8-3.6-6-3.1 1.2-1.8 13 1.6 6.6 1.7 27.762 8.949"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1164.8 13.1l-4.3.5-2.9.4v.7l-3.6.7-4.5-1 1.1-1.4-7.8-.1 6.3-.8h5.2l1.5 1.1 1.3-1 2.8-.7 5.8.9z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M976.6 223.4l2 2.4 9.5 2.9 1.9-1.4 5.8 2.9 5.9-.8.4 3.7-4.9 4.2-6.6 1.4-.5 2.1-3.2 3.5-2 5.2 2 3.7-3 2.8-1.2 4.2-4 1.3-3.7 4.9-6.8.1-5-.1-3.4 2.2-2.1 2.4-2.6-.5-1.9-2.2-1.4-3.6-4.9-1-.4-2.2 2-2.4.8-1.7-1.8-1.9 1.6-4.2-2-3.8 2.3-.5.3-3.1.8-.9.3-5 2.4-1.7-1.3-3.2-3.1-.2-.9.8h-3l-1.2-3.1-2.2.9-1.9 1.6.5-4.5-2-2.7 7.4-4.6 6.2 1.1h6.9l5.4 1.1 4.3-.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1035.7 231.4l-1.5 4.9-2.4-1.3-1.3-4.2.9-2.4 3.2-2.4z"
            className="France"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1014.4 185l1.1.5 1.4-.1 2.4 1.6 7.2 1.2-2.4 4.2-.4 4.5-1.3 1.1-2.3-.6.2 1.6-3.6 3.5v2.9l2.4-1 1.8 2.7-.1 1.8 1.5 2.4-1.7 1.9 1.5 4.9 2.8.8-.5 2.7-4.5 3.6-10.2-1.7-7.4 2.1-.6 3.8-5.9.8-5.8-2.9-1.9 1.4-9.5-2.9-2-2.4 2.7-3.8 1-12.6-5.1-6.6-3.7-3.2-7.6-2.4-.4-4.6 6.5-1.3 8.3 1.6-1.5-7.1 4.7 2.7 11.4-4.8 1.5-5.1 4.2-1.3.8 2.2 2.2.1 2.4 2.5 3.5 2.9 2.5-.5z"
            className="France"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1168.2 276.7l.1.2.3.4-.4-.1h-.3l-.4.2-.3-.3v-.3l.3-.1.2.1z"
            className="Cyprus"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1166.5 277.2v.1l-.2.2-.1.6-.1.2h-.3l-.2.2-.5.2-.2.1-.6.3-.4-.1-.5.1-.3.4-.2-.3-.3.1h-.2l-.3-.3-.4.3h-.5l-.5-.2-.5-.1-.4-.3-.3-.6-.3-.3-.2-.7-.2-.3.1-.3.5.3.4-.1.2-.3.1-.3.3-.1.2.1.2-.2h.2l.1.4.5.2.1.2h.6l.6-.5.4.1.3-.2.3.1.4.2.2-.3h.3l.3.4v.6l.3-.2.3.2.1-.1z"
            className="Cyprus"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M955.6 112l.4.2h.3l.1.2v.4l.2.3-.1.2-.6-.4-.2-.4-.2-.2-.2-.3z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M955.9 110.4l.8.2.2.2-.1.4-.1.1-.4-.5-.5-.1-.2-.4z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M954.62 109.04l.08.16h.3v.3h-.4l-.2.2-.6-.2-.2-.1-.2-.3.5-.1.1-.1.557.093-.257-.193.2-.8.5.1.3.5v.1l.6.2.3.5.3.2-.1.6-.5-.4-.2-.2-.2-.1-.1-.2-.2-.2h-.5z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M958.3 108.4l-.2-.2.3-.2z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M955.9 108.9l-.4-.2-.3-.3-.1-.3.1-.1.4-.1h.3l.6.4-.1.2.1.2.6.2v.2l-.4.3z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M958.1 108.3l-.3.4-.3-.2h-.3l.2-.3-.1-.4.1-.1.2.4z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M957.2 108.3h-.2l-.2-.4.1-.3.2.4z"
            className="Faeroe Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1063.9 271.7l-.2.3-.5-.2-.5-.3v-.5l-.1-.1h.6l.4.3.2.2z"
            className="Malta"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1062.3 270.6l-.5-.1v-.2l.4-.1.4.3z"
            className="Malta"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default EuropeRegionMap;
