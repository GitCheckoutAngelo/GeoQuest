import React from 'react';

interface NorthAmericaRegionMapProps {
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
function NorthAmericaRegionMap(props: NorthAmericaRegionMapProps) {
  const {
    height = 435.257,
    width = 709.635,
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
      viewBox="0 0 709.635 435.257"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-219.063 -89.77) scale(.95436)">
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
            d="M487.8 399.8h-1.7l1.3-7.2.7-5.1.1-1 .7-.3.9.8 2.5-3.9 1.1-.1-.1 1h1l-.3 1.8-1.3 2.7.4 1-.9 2.3.3.6-1 3.3-1.3 1.7-1.1.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M665.9 203.6l3.4.9 4.7-.2-3.3 2.6-2 .4-5.5-2.7-.6-2.1 2.5-1.9z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M680.3 187.6l-2.4.1-5.8-1.9-3.5-3 1.9-.5 5.9 1.6 4.2 2.6z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M372.4 191.3l-3.1.9-6.3-2.8v-2.2l-2.9-2.2.3-1.8-4.3-1.1.6-3.4 1.5-1.4 4.1 1.3 2.4 1 4.1.6.2 2.2.4 2.9 3.2 2.6z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M711.5 177.8l-5 5.4 3.9-2.1 2.9 1.4-2.4 2.1 3.8 1.7 2.8-1.5 4.3 1.9-2.8 4.6 3.8-1.1-.3 3.3.5 3.9-3.6 5.6-2.4.2-2.9-1.2 2.5-5.1-1.2-.8-7.3 5.4-3-.2 4.4-3-4.4-1.5-5.5.4-9.6-.2-.2-1.8 3.8-2.3-1.7-1.6 5.4-3.8 8.2-9.9 4.2-3.5 5-2.1 2.1.2-1.5 1.7z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M351.5 156.4l1.5.8 5-.5-7.2 6.9.3 5h-1.9l-.7-2.8.5-2.9-.8-1.9 1.3-2.7z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M634.9 108.9l-3.6 3-1.7-.5-.1-1.7.4-.4 2.8-1.7 1.7.1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M625.2 105.7l-7.2 3.2-3-.2v-1.5l5-2.7 6 .1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M622.1 88.9l-.9 2.5 2.7-.9 1.5 1.5 3.5 2 3.8 1.7-1.4 2.7 3.5-.4 1.9 1.9-5 1.8-5.9-1.4-.8-2.6-6.3 3.1-8.2 2.9.7-3.3-6.3.5 5.7-2.8 3.6-4.5 5.1-5.1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M667 80.6l-4.9.3.7-2.7 3.8-3.1 4.3-.7 2.3 1.5-1.5 2.3-.9.8z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M592.5 69.9l-4.1 1.9-4.2-1.6-3.9.5-3.4-2.4 5-1.7 4.9-2.3 3 1.5 1.6 1 .4 1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M645.5 212.5l-2.2-3.6 2.9-8.5-1.6-1.8-3.7 1-1.1-1.6-5.5 4.7-3.2 4.9-2.8 2.9-2.5 1-1.7.3-1.1 1.5h-9.3l-7.8.1-2.7 1.1-6.8 4.4v-.1l-.9-.4-2 .9-1.9 1.3-1.8-1.1-4.7.8-3.9.9-1.9.8-2.3 2.1 1.8.7 1.7-.4h.3l-.3 1.9-4.8.7-2.8.8-1.7 1-2.6-.6-1.6.3-2.9 1.8-4.6 2-2.7-.4 2-2.2 3.7-3.5 4.1-2.1 1.1-1.8.9-3 3.8-3.5.9-4 1.1 3.9 3.8.9 2.4-2.1-1.4-4.8-.9-2-4-1.2-3.8-.7h-3.9l-3.4-.8-.4-1.4-1.4.9-1.2-.2 1.9-2.1-1.8-.8 1.9-2.4-1.2-1.8 1.7-1.8-5.2-.9-.1-3.6-.8-.8-3.3-.2-4.1-1.2-1.5.8-1.8 1.5-3.3 1-3.1 2.5-5.4-1.7-4.4.8-3.9-1.9-4.6-1-3.3-.4-1-1 .9-3.4h-1.7l-1.3 2.4H377l-5.4-6.1-1.6-2.7-7-2.6 1.3-5.5 3.6-3.7-4.1-2.7 3.1-4.9-2.1-4.4 2.5-3.2 5.1-2.9 3.2-3.8-4.6-3.8 1.4-6.9 1.1-4.2-1.6-2.7-.8-2.4.6-3.1-6.5 1.9-7.6 3.3-.3-3.8-.5-2.6-2.8-1.6-4.2-.2L385.4 87 410 66.6l6 1.3 3.3 2.6 3.7.5 6.3-2.2 7-1.7 5.3.6 8.9-2.3 8.2-1.3.2 2.2 4.5-1.3 3.9-2.5 2.1.6 1.4 4.8 9.5-3.7-3.9 4.1 6-.9 3.2-1.5 4.6.3 3.9 2.2 7.5 2 4.7.9 4.4-.3 2.9 2.8-8.5 2.7 6.4 1.1 11.9-.6 4.4-1 1.4 3.3 7.1-2.7-2.1-2.4 4.5-1.8 5.2-.3 3.9-.5 2.1 1.3 1.5 2.9 5-.4 5.3 2.5 7.2-.9 6 .1 2.4-3.4 4.5-.9 4.9 1.8-4.3 5.2 6.2-4.4 3.2.2 6.4-5.5-1.6-3.3-2.9-2.2 5.5-5.9 8.2-3.8 4.5.9 2 2.3.4 6-5.8 2.6 6.7 1.1-4.4 5.5 8.9-4.2 2.2 3.5-4.3 4 1.3 3.7 7.3-3.9 6.5-4.8 4.7-5.9 5.5.4 5.4.8 3.6 2.7-1.7 2.7-5.1 2.9.9 2.9-2.4 2.7-10.9 3.9-6.5.9-3.2-1.7-3.3 2.8-7.4 4.7-3 2.5-7.7 3.8-6.5.4-5.1 2.4-2.9 3.8-5.7.7-8.7 4.7-9.4 6.5-5 4.6-4.9 6.9 6 1-1.5 5.5-.8 4.6 7.3-1.2 7 2.6 3.3 2.3 1.7 2.8 4.9 1.7 3.6 2.5 7.6.4 4.8.6-3.6 5.2-1.7 6.1.1 6.9 4.4 5.9 4.7-2 5.6-6.4 2.3-9.6-1.7-3.2 9-2.9 7.5-4.2 4.8-4.2 1.7-4-.4-5.1-3.2-4.5 8.9-6.2 1-5.3 3.9-9 3.8-1.4 6.7 1.6 4.2.6 4.5-1.6 3.1 2 3.6 3.4.2 2.2 7.7.5-2.6 4.9-2.3 7.4 3.8 1 1.6 3.5 8.2-3.3 7.5-6.6 4.2-2.7 1.1 5.3 2.6 7.5 2 7.2-3.4 3.8 4.8 3.4 2.9 3.4 6.9 1.6 2.4 1.9v5.2l3.4.8 1.1 2.3-2 6.9-4.3 2.3-4.2 2.2-8.8 2.2-7.9 5-8.6 1.1-10.1-1.4h-7.3l-5.3.4-5.7 4.5-7.4 2.8-10.1 8.2-7.9 5.8 4.7-1 10.9-8.3 12.3-5.2 7.6-.6 3.3 3.1-6.1 4.2-.6 6.7.1 4.8 5.6 3.1 8.6-.9 7.2-7.1-1 4.6 2.5 2.3-7.4 4.1-12.4 3.8-5.8 2.5-7.2 4.6-3.7-.5 1.5-5.3 10.4-5.3-8.1.2z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M539 48.7l-4.7 2.4 10.5-1.5 2.6 2.6 7.3-2.7 1.8 1.7-2.2 5.1 4.3-2.1 2.8-5.3 4.3-.8 3 .8 2.2 2.1-2.7 5.1-2.4 3.7 4.2 2.6 5 2.6-2.6 2.3-7.1.5.8 2-3.2 2-6.7-.8-5.7-1.5-5.1.3-9.5 1.9-11.3.8-7.9.5.3-2.6-4.1-1.4-4.3.6-.6-4.3 3.3-.6 7.3-.9 5.5.3 6.2-1-6.5-1.2-9.1.4-5.7-.1v-1.9l11.7-2.2-6.3.1-5.4-1.4 7.8-3.9 5.2-2.1 14.2-3.1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M578.5 47.2l-7 3.4-2.3-3.6 2.1-.8 5.5-.2z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M687.1 48.8l-.7 1.4-4.1-.1-4.1-.1-4.9.7-.9-.4-2.1-2.7 1.7-1.8 2.2-.4 8.4.6z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M647.3 48.5l.3 3.2 7.2-4.1 11.7-2.1 2.3 5.3-3.2 3.4 9-1.5 5.3-2.1 6.8 2.6 3.7 2.5-1.1 2.3 8.2-1.2 1.9 3.4 8.4 2.1 2.2 2.1.9 5.1-9.1 2.5 7.7 3.6 5.9 1.2 3.3 5 6.5.4-3.3 3.9-10.9 6.5-4-2.4-3.8-5.4-5.9.7-2.3 3.3 2.7 3.2 4.5 2.6 1 1.5-.1 5.7-3.6 4.1-4.7-1.6-8.6-4.5 3.6 4.9 2.8 3.5-.3 2-10.9-2.3-7.6-3.4-3.8-2.7 2.4-1.7-4.8-2.9-4.7-2.7-.9 1.6-13.1.9-2.4-1.9 5.4-4.2 8.1-.1 9.3-.7-.2-2 3.1-2.8 8.8-5.4.4-2.5-.5-1.8-4.7-2.7-7.1-1.8 3.5-1.4-2-3.4-3.4-.3-1.9-1.8-3.3 1.6-7.9.7-14-1.2-7.4-1.6-5.9-.8-1.9-1.9 6.3-2.4h-5.7l3.3-5.3 7.1-4.6 6-2.1 11.2-1.4z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M596.9 45l3.6 1.1 7.6-.7-.5 1.5-6.1 2.5 3.8 2.2-5.2 4.7-8.4 2-3.4-.4-.9-2-5.9-4 1.7-1.7 7.4.6-.9-3.3z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M619.5 50.5l-7.8 3.9-4.4-.2 1.8-4.6 2.6-2.5 4.2-2.2 5.2-1.4 7.9.2 6.2 1.2-10.1 4.6z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M503.7 57.7l-13.5 2.6.6-2.3-6-2.8 4.4-2.2 7.5-3.8 7.6-3.4.4-3.1 14-.8 4.2 1.1 9.5.3 1.9 1.4 1.6 2.2-6.5 1.3-13.9 3.6-9.2 3.7z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M628.9 39.3l-4.1 1.9-5.2-.4-3.2-1.3 4.5-2.2 6.9-1.4 1.4 1.8z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M620.1 30.6l.2 2.3-2.8 2.5-5.8 3.8-6.9.5-3.2-.8L605 36l-6.6.3 4.3-3.8 3.8.2 7.7-1.7 4.9.3z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M580.7 33.2l-.7 1.7 4.4-.8 3.6.2-2.3 2.5-5.1 2.3-13.9.8-12.3 2.2-6 .1 1.5-1.6 10.7-2.3-17.9.6-4.2-.9 11.7-4.8 5.4-1.4 8.3 1.7 2.9 2.9 6.1.4.7-4.7 5.8-1.8 3.1.5z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M636.4 28.8l2.3 1.6h7.4l1.4 1.6-2.8 1.8 3.1 1.1 1.2 1.2 4.9.2 5.1.4 7.1-1 8.1-.5 5.8.4 2.3 1.9-1 2-3.6 1.4L671 42l-4.3-.7-11.8.8-8 .1-5.6-.6-8.6-1.6 1.6-2.8 2.1-2.4-1.4-2.2-7-.6-2.6-1.5 3.8-2z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M560.7 26.2l-5.8 3.7-5.3 1.7-3.8.2-9.9 2.1-7.1.8-3.6-1.1 11.7-3.7 12.2-3.1 5.5.1z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M641.9 26.8l-1.8.1-6.6-.3.7-1.3 7.2.1 1.6.8z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M583.1 25.9l-8.8 1.4-3.3-1.5 5.1-1.5 6-.5 4.1.7z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M590.9 21.7l-5.7.9h-6l1-.7 5.7-1.3 1.7.2z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M637.7 24.2l-6.6 1-1.6-1.1.6-1.7 2.2-1.9 4.4.2 1.7.3 2.3 1.6z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M623.9 23l-1.1 1.9-5.3-.5-4-1.5-7.8-.2 5.3-1.3-2.8-1.1 2.2-1.8 6.1.6 7.5 1.7z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M678 16.9l2.7 1.5-6.5 1.3-10.6 3.5-6.8.3-6.8-.6-1.6-1.9 2.1-1.6 4.3-1.2h-6.6l-2-1.5.4-1.9 4.9-1.9 4.1-1.3 4-.3-.3-1 8.3-.2 1.6 2.2 4.7.9 4.8.9z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M757.2 2.9l8.7.3 6.7.5 5.2 1-1.1 1-9.8 1.7-9 .8-4 .9h7.5l-10.5 2.5-6.8 1.2-9.3 3.5-8.1.7-3.1 1-11.3.4 4.4.6-3.3.8.7 2.3-5 1.6-6.9 1.3-3.5 1.8-6.6 1.5-.5 1.1 6.5-.2-1.1 1.2-12.7 2.9-8.5-1.4-11.7.8-5-.6-6.8-.3 2.1-2.3 8-1.1 2-3.4 2.6-.3 7.5 2-1.7-3-4.9-.9 5-1.8 7.6-1.1 2.8-1.6-3-1.7 1.1-2.2 9.4.1 2.2.5 7.3-1.6-7.3-.5-12.6.3-4.4-1.4-.8-1.7-2.5-1.2 1.1-1.3 6-.8 4.2-.1 7.4-.6 6.8-1.5 3.9.2 2.4 1.1 5-2 5.2-.6 6.5-.4 10.4-.2 1.3.4 10.3-.6 7 .2z"
            className="Canada"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2.6-.1 2.6 1.1.9-.9.8.2 1.1-.6 1.3-.3 1.3-3-1.4-1.1-1.4.7-1.1-.1-1.4-1.5-1.5-2.2-1.3-1.8-.8-.3-1.9-1.4-1.1.2 1.8-1.2 1.6-1.2-1.8-1.7-.7-.7-1.2.1-2 .9-2-1.5-.9 1.4-1.3.9-.8 3.6 1.7 1.3-.8 1.8.5.8 1.3 1.7.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M544.8 355.7l1.9 2.3 5.2-.7 1.8 1.5 4.2 4 3.2 2.9 1.8-.1 3.2 1.3-.6 1.8 4 .3 3.9 2.6-.8 1.5-3.8.8-3.8.3-3.7-.5-8.1.6 4.2-3.5-2.1-1.7-3.6-.4-1.7-1.9-.8-3.6-3.2.2-5-1.7-1.5-1.4-7.1-1-1.8-1.2 2.3-1.6-5.4-.3-4.4 3.3-2.3.1-1 1.6-2.8.7-2.3-.7 3.2-1.9 1.5-2.4 2.7-1.4 3-1.2 4.3-.6 1.4-.8 4.7.5 4.4.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M585.7 386l.3-1.8-1.3-1.9 1.5-1.1.7-2.5-.1-3.4.8-1.1h4.3l3.2 1.6 1.5-.1.7 2.3 3.1-.2-.4 1.9 2.5.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6.3-1.8-.3-1.1 1.2-2.2.4-.7-1.6-1.9.9-2.7 4.4-1.3-1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M896.3 1.4l19.9 3-6.7 1.4-13 .2-18.5.4 1.4.7 12.3-.5 9.7 1.4 7-1.2 2.4 1.4-4.5 2.4 9.2-1.6 17.1-1.5 10 .8 1.7 1.7-14.8 2.9-2.2 1-11.4.8 8.1.2-4.9 3.2-3.6 2.9-1.2 5.2 3.7 3.2-5.9.1-6.5 1.6 6.3 2.6-.1 4.2-4.2.5 4.1 4.3-8.7.4 4 2-1.6 1.8-5.7.8-5.5.1 4.2 3.4-.5 2.4-7.3-2.2-2.4 1.4 5 1.3 4.6 3.2.6 4.3-7.4 1-2.7-2.1-4.2-3 .5 3.6-5.4 2.8 10.7.2 5.5.3-11.9 4.7-12.2 4.3-12.7 1.8-4.6.1-4.9 2.1-7.5 5.8-10.2 3.9-3 .3-6.1 1.3-6.6 1.4-4.8 3.4-1.4 4-3.4 3.8-8.6 4.6.3 4.5-3.6 4.8-4.1 5.7-6.5.4-5-4.8-9-.1-3.2-3.2-.8-5.6-4.8-7.2-.7-3.7 1.5-5.1-3.7-5.1 3.3-4.1-1.9-2 7-6.4 7.2-2.1 2.6-2.2 2.8-4.2-5.5 1.9-2.6.8-4.1.7-4.2-1.7 1.5-3.7 3-2.8 3.8-.1 7.6 1.5-5.3-3.4-2.7-1.8-4.4.7-2.6-1.3 7-4.8-1.3-2L768 46l-1.4-5.4-3.6-1.9 1.4-2.1-8.1-2.9-7.7-.4-10.1.2-9.5.4-3.1-1.6-3.8-3.1 11-1.5 7.6-.2-14.6-1.3-6.5-1.9 2.2-1.8 15.7-2.2 15-2.2 2.8-1.6-8.1-1.6 4.6-1.7 14.7-2.9 5.4-.4.2-1.8 9-1.1 11-.6h10.4l2.8 1.2 10.6-2.2 7.1 1.5 4.6.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.2 11.6.2 5.1-1.4L870 1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M488.1 387.5l-.7 5.1-1.3 7.2h1.7l1.7 1.2.6-1 1.5.8-2.8 2.5-2.9 1.8-.5 1.2.3 1.3-1.3 1.6-1.4.4.3.8-1.2.7-2 1.6-.3.9-2.8-1.1-3.5-.1-2.4-1.3-2.8-2.6.4-1.9.8-1.5-.7-1.2 3.3-5.2h7.2l.4-2.2-.8-.4-.5-1.4-1.9-1.5-1.8-2.1 2.5-.1.5-3.6h5.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M519.6 405.5l-1.9-.1-.9.9-2 .8h-1.4l-1.3.8-1.1-.2-.9-1-.6.2-.9 1.5-.5-.1-.2 1.4-2.1 1.7-1.2.8-.6.8-1.5-1.3-1.4 1.7h-1.2l-1.3.1-.2 3.2h-.8l-.8 1.5-1.8.3-.8-2-1.7-.6.7-2.6-.7-.7-1.2-.4-2.5.7-.1-.8-1.6-1.1-1.1-1.2-1.6-.6 1.3-1.6-.3-1.3.5-1.2 2.9-1.8 2.8-2.5.6.3 1.3-1.1 1.6-.1.5.5.9-.3 2.6.6 2.6-.2 1.8-.7.8-.7 1.7.3 1.3.4 1.5-.1 1.2-.6 2.5.9.8.2 1.6 1.2 1.5 1.4 1.9 1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M586.8 375.3l.1 3.4-.7 2.5-1.5 1.1 1.3 1.9-.3 1.8-3.6-1.1-2.7.4-3.4-.4-2.7 1.2-2.8-2 .7-2.1 5.1.9 4.1.5 2.2-1.4-2.3-2.8.4-2.5-3.5-1 1.5-1.7 3.4.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3.8-1.5 2.4-.4 1.3.2 3.7.6 2.7 1.5.8 1.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M449.3 335.9l2.2-.2-3.2 5.7-1.8 4.6-1.8 8.6-1.1 3.1.4 3.5 1.3 3.2.4 4.9 3 4.8.8 3.7 1.7 3.1 5.7 1.7 1.9 2.7 5.2-1.8 4.3-.6 4.4-1.2 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.9 4-1.7 6.1-1.5 4.9.3 3.4-.6 1.2 1.4-.6 3.1-3.5 3.8-1.8 3.9.9 1.1-1.2 2.8-2.1 5-1.2-1.7-1.1.1-1.1.1-2.5 3.9-.9-.8-.7.3-.1 1-5.2-.1h-5.2l-.5 3.6-2.5.1 1.8 2.1 1.9 1.5.5 1.4.8.4-.4 2.2h-7.2l-3.3 5.2.7 1.2-.8 1.5-.4 1.9-5.6-6.9-2.6-2.1-4.4-1.7-3.2.5-4.8 2.4-2.9.6-3.7-1.7-4.1-1.2-4.8-2.9-4.1-.9-5.9-3-4.3-3.1-1.1-1.7-3.1-.4-5.4-2-1.9-2.9-5.4-3.7-2.2-4-.8-3.2 1.9-.6-.3-1.8 1.6-1.7.4-2.2-1.5-2.9v-2.5l-1.3-3.3-3.8-6.4-4.6-5-1.9-4-4.1-2.6-.7-1.6 1.7-3.9-2.4-1.5-2.5-3.2-.2-4.4-2.8-.6-2.3-3.3-1.7-3.2.3-2-1.5-4.8-.3-4.9.8-2.5-3.1-2.6-1.9.3-2.4-1.7-1.8 2.6-.1 3-1 4.9 1 2.6 2.8 4.4.4 1.6.7.4.1 2.2 1-.1v4.2l1.3 1.6.5 2.3 2.7 3.2.4 6 1 2.8.9 3-.3 3.4 2.6.2 1.6 2.9 1.5 2.9-.3 1.2-2.8 2.3h-1l-.7-3.9-2.9-3.7-3.4-3.1-2.5-1.6 1.2-4.7-.1-3.5-2.1-2-3.1-2.8-.9.8-1-1.7-3-1.5-2.2-3.8.5-.4 2.1.3 2.7-2.4 1-2.9-2.9-4.6-2.6-1.7-.8-4-.6-4.3-.8-5.1-.2-5.8 6.3-.5 7.1-.7-.9 1.3 7 3.1 10.9 4.5H399.8l.8-2.7h9.4l1.3 2.3 2.1 2.1 2.4 2.8.8 3.3.4 3.6 2.3 1.9 4 1.9 4.8-5 4.5-.2 3.2 2.6 1.6 4.4.9 3.8 2.4 3.6.2 4.5.9 3 3.9 2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M519.6 405.5l-.5.7-.5 1.4.4 2.3-1.5 2.2-.8 2.6-.5 2.8.2 1.7-.1 2.9-.9.6-.7 2.8.2 1.7-1.2 1.6.1 1.7.8 1.1-1.4 1.4-1.7-.5-.8-1.3-1.8-.5-1.3.8-3.6-1.7-.9.8-1.8-2-2.5-2.6-1.1-2.1-2.2-2.1-2.5-2.9.7-1 .8 1 .5-.4 1.8-.3.8-1.5h.8l.2-3.2 1.3-.1h1.2l1.4-1.7 1.5 1.3.6-.8 1.2-.8 2.1-1.7.2-1.4.5.1.9-1.5.6-.2.9 1 1.1.2 1.3-.8h1.4l2-.8.9-.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M549.3 446.2l-.7.9 1.1 3.8-1.1 1.9-1.8-.5-.9 3.1-1.8-1.8-1-3.5 1.4-1.7-1.4-.4-.9-2.1-2.8-1.8-2.4.4-1.3 2.2-2.4 1.6-1.2.2-.6 1.4 2.5 3.5-1.6.8-.8.9-2.7.4-.8-3.9-.8 1.1-1.8-.4-1-2.5-2.3-.5-1.5-.7h-2.4l-.2 1.4-.6-1 .3-1.3.6-1.3-.2-1.1.9-.8-1.1-.9.1-2.6 2.2-.6 1.9 2.3-.2 1.4 2.2.3.6-.6 1.5 1.6 2.8-.5 2.5-1.6 3.5-1.3 2-1.9 3.1.4-.2.6 3.1.2 2.4 1.2 1.8 1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M492.5 415.9l-.7 1.5-3.3-.1-2-.6-2.2-1.3-3-.4-1.5-1.4.3-.9 2-1.6 1.2-.7-.3-.8 1.4-.4 1.6.6 1.1 1.2 1.6 1.1.1.8 2.5-.7 1.2.4.7.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M539.5 194.5l-6.1 2-4.7 2.5-4.6 2.7-.5.9 5.7-1.3 2.1 2.1 4.6-1.5 4.9-2.1 5.4-2.1-3.1 3.3 2.5.8 2.5 2.4 5.1-1.4 5.1-.5.3 1.8 1.5.2 1.2.2 1.5 2.5-4.7.6h-.1l-3.7-.7-4.5 1.2-3.7.6-4.7 4.1-3 2.3.4.7 5.5-4.1h.7l-4.7 4.9-2.9 4.4-2.5 3.6-.6 3.1-.8 1.5-.6 1.7.1 3.3.3.5 1.8-.1 1.6-.7 1.4-.8 3.3-3.1 1.8-4.2-.1-3.9 1.4-2.7 2.6-3.1 2.1-2.2 2.7-1.5-.4 2.1 2.2-3.1 1.3-.6 1.7-2.4 3.8 1.3 2.8 2.4-.8 2.9-1.6 2.9-3.8 2.5-.4 1.6h1l4.3-2.7 1.6.6-.5 3.7-.7 2.6-3.7 3.5-2 2.2-2.7 2.4 2.7 1.3 2.5.4 4-.9 3.7-1.7 3-.9 4.6-1.8 5.8-3.8.1-.6.3-1.9 2.7-.8 3.9.3 4 .5 4.6-2.1.6-2.5-.2-.9 6.8-4.4 2.7-1.1 7.8-.1h9.3l1.1-1.5 1.7-.3 2.5-1 2.8-2.9 3.2-4.9 5.5-4.7 1.1 1.6 3.7-1 1.6 1.8-2.9 8.5 2.2 3.6.2 2.1-6.4 3-6 2.2-6 1.9-4 3.8-1.3 1.4-1.2 3.4.7 3.3 2.1.2.2-2.3 1.1 1.4-1 1.8-3.8 1-2.5-.1-4.2 1.1-2.3.3-3.1.3-5 1.9 8.1-1.2 1.1 1.2-7.9 1.9H601l.4-.8-2.1 1.8 1.4.3-2.5 4.6-5.3 4.9.1-1.7-1.1-.3-1.2-1.6v3.5l1 1.1-.6 2.4-2.4 2.5-4.5 5.1-.4-.2 2.9-4.4-2-2.4 1-5.4-1.9 2.8v4.1l-3.2-1 3 2-1.5 6.1 1.4.5v2.2l-1 6.4-4.6 4.7-6.1 1.9-4.4 3.8-2.8.4-3.4 2.4-1.3 2.1-6.9 4.2-3.8 3.1-3.5 3.8-1.9 4.5v4.5l.6 5.5 1.5 4.5-.5 2.8 1.3 7.4-1 4.4-.6 2.5-2 3.9-1.8.8-2.6-.8-.4-2.8-1.8-1.5-2-5.5-1.6-4.9-.4-2.5 2-4.3-.8-3.5-3.1-5.4-1.9-1-6.1 3-.9-.4-2-3-3-1.6-6.4.9-4.6-.8-4.3.5-2.5 1 .6 1.7-.7 2.6.8 1.3-1.2.8-1.8-.9-2.3 1.2-3.9-.2-3.3-3.4-4.9.8-3.6-1.5-3.5.5-5 1.5-6.1 4.7-6.1 2.8-3.7 3-1.9 2.9-1 4.5-.4 3 .6 2.2-2.2.2-3.6-1.4-3.9-2-.9-3-.2-4.5-2.4-3.6-.9-3.8-1.6-4.4-3.2-2.6-4.5.2-4.8 5-4-1.9-2.3-1.9-.4-3.6-.8-3.3-2.4-2.8-2.1-2.1-1.3-2.3h-9.4l-.8 2.7H384.7l-10.9-4.5-7-3.1.9-1.3-7.1.7-6.3.5.3-3.2-2.1-3.7-2.2-.8.1-1.8-2.9-.4-1.2-1.7-4.8-.6-.9-1.1.8-3.5-2.5-6.4-.5-8.9.9-1.5-1.3-2.1-1.5-5.4 1.8-5.2-.9-3.5 3.9-5.3 2.8-5.4 1.1-4.9 5.5-6 4-5.7 4-5.7 4.3-8.5 1.8-5.3.4-2.9 1.4-1.3 5.8 2.2-1 5.9 2.2-1.7 2.5-5.1 1.6-5.1h137.1l1.3-2.4h1.7l-.9 3.4 1 1 3.3.4 4.6 1 3.9 1.9 4.4-.8z"
            className="United States"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M275 138.6l-7 2.3-.8-1.6 2.3-2.8 6.4-2.1 3.5-.9 2.6.4v1.9z"
            className="United States"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M236 122l-3.9.9-1.7-1.1-.8-1.6 5.7-1 3 .6z"
            className="United States"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M237.2 99.6l1.2 1 3.5-.5 1.6 1.5 3.3.7-1.2.7-4.9 1.2-1.7-1.3-.3-1-4.3.3-.3-.5z"
            className="United States"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M410 66.6L385.4 87l-35.6 32.7 4.2.2 2.8 1.6.5 2.6.3 3.8 7.6-3.3 6.5-1.9-.6 3.1.8 2.4 1.6 2.7-1.1 4.2-1.4 6.9 4.6 3.8-3.2 3.8-5.1 2.9-.6-2.2-2.5-2 3.3-5.2-1.6-4.9 2.7-5.6-4.1-.4-7.1-.1-3.8-1.8-3.3-6.1-3.3-1.1-5.7-2.1-6.8.5-6-2.7-2.7-2.5-6.3 1.2-3.5 4.1-2.9.4-6.6 1.2-6.2 2-6.4 1.3 3.2-3.5 8.4-5.8 6.8-1.8.4-1.4-9.4 3.2-7.4 3.9-11.2 4.2.2 2.9-9 4.2-7.7 2.5-6.6 1.9-4 2.6-10.6 3.1-4.5 2.8-8.2 2.6-2.7-.4-6.2 1.6-7 2.1-6.1 2-10 1.8.4-1.1 8.2-2.8 6.6-1.9 8.6-3.3 6.5-.6 5-2.5 10.4-3.6 2.3-1.2 5.7-2.1 5.8-4.5 6.2-3.5-7.3 1.8-.3-1.1-4.9 2.2.4-3-3.6 2.1 1.6-2.9-7.3 2.3h-2.8l3.7-3.5 3.3-2.2-.4-2.1-7.2 1.2-.6-2.8-1.3-1.4 4-3.3-.4-2.5 5.9-3.3 7.7-3.3 5.3-2.9 4.1-.4 1.8.9 7.1-2.8 2.5.5 5.6-1.8 2.5-2.6-1.1-1 6-2.2-2.8.1-6.2 1.2-2.9 1.3-1.8-1.3-6.9.7-4.6-1.4 1.2-2.3-1-3.2 9.2-2.4 13.2-2.7h3.5l-4.3 2.8 9.2-.2 1.2-3.5-2.3-2.1.8-2.8-.7-2.3-3.3-1.7 6.5-2.9 7.5-.2 8.8-2.4 4.8-2.6 7.9-2.6 4.8-.6 11.2-2.4 3.1.4 10.4-2.8 4.4 1.1-.5 2.4 3.3-1 6.3.3-1.9 1.2 4.9.9 4.9-.5 6.2 1.6 7.2.6 2.2.6 6.6-.8 4.1 1.6z"
            className="United States"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M592.9 422l-.5-.2-.5-.5.1-.6.2.3.4.4.3.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M634.2 384.9h-.2l.3-.4h.3l-.2.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M640.7 391.9l.6.3-.2.3h-.2l-.7.1-.2-.1v-.5l.3-.1.1-.3h.2z"
            className="Antigua and Barbuda"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M640.7 388.2h.2l.2.2.1.4-.1.3-.2.1-.1-.2-.3-.2v-.5z"
            className="Antigua and Barbuda"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M580.4 366l-.4.5-.2.5-.6.3h-.5l-.1-.1-.4.2-.5.1-.6-.2-.4.1-.1-.5.3-.2.2-.3.4-.2.3-.4h.4l.3-.2.2.3.5.2.5-.2.7-1h.3v.2z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M580.6 364.3l-.2-.6.6-.3.3.3v.2l-.3.1z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M581 357.8l.2-.1.5.3h.4l.4.1.3.2v.3l-.2.1-.5-.4h-.4l-.1-.1-.5.2-.5-.2v-.1l.2-.5z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M577.1 356l-.2.4v.7l-.1.4-.4.3-.2.4-.4.3-.7.3-.1.2-.2-.2.1-.2.4-.1.2-.2v-.2l.4-.1.2-.4.4-.1.3-.4-.2-.3h-.4l-.2-.2.4-.5.1-.1z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M575.2 355.7l.1.1h.4l.4.2-.4.4-.1-.2h-.2l-.4-.1-.4-.2-.3-.6.3-.1.4.1z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M566 349.8l.6.7.3.2.3.5-.3-.1-.1-.2-.3-.1-.4-.4-.2-.1-.2-.4z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M569.7 349.8l.3.6.2.5v.4l.2.2.2.7v.9l.2.3.5.2.4.6v.8l-.4-.7v-.2l-.3-.4-.6-.2.2-.2-.3-.3v-.3l.2-.3-.1-.5-.3-.4.1-.1-.3-.4-.1-.6-.2.1z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M572.6 349.8l-.3.2-.3-.1-.1-.2.6-.2z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M564.4 347.9l-.1-.1-.3-.7h.2z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M574.9 347.4l-.4.6h-.4l.2-.3.1-.6.4-.3.1.4z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M556.4 346.2l-.3.1-.2.3-.3-.1.6-.4z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M556.6 346.9l.4.2.2-.2.1-.5.2-.1.2.6v.5l-.1.3.1.6v.3l-.4.8-.2.1-.4-.2.2-.3.4-.2-.1-.1-.6.4-.2-.2.4-.3h-.4l-.2.1-.2-.2v-.7l.1-.2-.4-.5v-.2l.4-.2.1-.3.3-.1.1-.2.6-.3.1.4-.5.4z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M570.1 346.3l.1.5-.2-.1-.5.1-.4.1-.1-.2.3-.2.4-.3v-.2l-.4-.2-.2-.6-.1-.6-.4-.4v-.2l-.5-.5.3-.3.4.4v.5l.2.3.1.5.3.5.4.3.1.3z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M559.8 340.8l.3.2-.6.3-.3-.1-.2.2-.5-.1.2-.3.4-.2z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M555.6 340.3l.4-.2.3.3-.1.2.1.2-.2.4.3.3.2.9.2.3.4.5-.2.7.1.6-.2.3-.3.1-.4.4-.3.2h-.3l-.3.2h-.3v-.4l-.3-.2.1-.6-.3.3-.2-.1-.6-.4-.3-.3-.2-.3.7-.3.5.7.1-.6-.3-.1-.1-.3.1-.3.6-.6.2-.4-.1-.1.3-.4v-.5l-.2-.7.1-.1h.3z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M563.7 337.7l.1.2.3.4.8.7.5.1.1.1.2.4.3.4.5.4v.2l-.2.8-.1.2v.3l-.1.5-.2.3-.1.7-.1.1-.2-.6-.4-.3.1-.2.5.1.2-.2-.1-.2.1-.4.3-.4.1-.5v-.3l-.5-.4-.4-.7-.3-.2-.6-.3-.3-.3-.6-.2-.4.2.4-.9z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M554.9 330.2l.5.2h.1l.7.1.2-.2.2.1h.5l.4-.2h.4l.3-.2.1.5-.1.2h-.7l-1.1.2h-.3l-1.5.4-.7.4h-.4l-.2-.1-.3-.3-.5-.6.6.3.1.2h.5l.5-.2.4-.6-.3-.1.2-.3.1-.3z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M559.2 328.9l.8.2.2-.1.4.3.9 1 .2.6.4.1.7.5v.2l-.2.5.2.7h-.4l-.5.4-.1.2-.3 1-.1.9-.2.2-.3-.2-.1-.4-.4-.1.3-.5h.2l.5-.4-.1-.4.2-.4v-.3l.2-.3v-.6l.2-.1.2-.3.1-.3-.3-.1-.5-.1-.1-.3v-.2l-.4-.2v-.3l-.3-.7-.2-.1-.3.1-.5-.1h-.3l-.6-.4z"
            className="Bahamas"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M635.2 387l-.1-.3.3.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M637.3 294h-.3l-.1.1.1.2-.4.2-.1-.1.2-.1h.1l.1-.3.3-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M651.5 418l-.6-.2-.1-.5v-.8l.2-.4.2.2.2.6.5.3.1.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M599 424.5h-.3l-.4-.3-.3-.1-.3-.3-.1-.2-.3-.1-.2-.4-.3-.3.1-.5.5.3.1.5.4.4.7.2.2.3.3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M532.7 377.8l.3.1.2-.4.4.1h.5l.1.2-.2.2-.2-.1-.4.1-.2.1h-.7z"
            className="Cayman Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M540.8 375.3l-.7.3.2-.3z"
            className="Cayman Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M541.4 375.4l-.1-.1.8-.3-.2.3z"
            className="Cayman Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M642 401.7l.5.1.2.5v.6l-.1.8-.1.2-.2.1-.4.2.1-.4-.1-.2-.1-.7-.3-.5v-.3l.1-.3v-.3h.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M639.2 424.5l-.4.3-.2-.1-.1-.5.2-.5.3-.4h.3l.1.3-.1.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M636.3 392h-.3l-.1-.2.2-.4h.2l.1.2z"
            className="Saint Kitts and Nevis"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M635.6 390.5l-.1.3h-.2l-.4-.2-.2-.2.3-.4.5.4z"
            className="Saint Kitts and Nevis"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M643.7 413.8l-.2-.2-.4-.2-.1-.2v-.6l.1-.2.7-1.1.3.2v.7l-.1.8-.1.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M634.2 386l-.4-.1.2-.3.3-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M638.2 393.9l.2.4v.3l-.2.2-.2-.1-.1-.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M607.1 385.9l-.3-.2.1-.2h.3l.1.1z"
            className="Puerto Rico"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M621.7 385.4h-.2l-.9.3h-.6l.2-.2.4-.2.4-.1.6.1z"
            className="Puerto Rico"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M612.2 383l.6.1h.6l.3.1.6-.1.3.1.4-.1.2.1.5-.1.4.1h.3l.8.2v-.2l.6.2.1-.1.8.1.2.2h.2l.6.3.2-.1-.1.7.2.3-.9.3-.3.4-.3.6-.3.2-.3.1h-.4l-.6.1-.3.2-.7-.1-.2-.2-.5.2-.3-.3-.7.2-.9-.1-.3.1-.6.1-.2.1-.2-.2-.4-.1-.3.2-.6-.1.3-.7v-.4l.2-.4-.2-.6-.2-.1-.1-.4.4-.2.2-.1v-.5l.4-.2z"
            className="Puerto Rico"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M634.2 386v.1l-.4-.1v-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M587.7 361.6h.7l.3.4h-.3l-.3-.1-.5.1-.1-.3z"
            className="Turks and Caicos Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M585 361.5l.3.4.6-.1-.2.2h-.6l-.4-.2z"
            className="Turks and Caicos Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M587.2 360.9v.5l-.5-.2-.1-.3.1-.1z"
            className="Turks and Caicos Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M642.2 417.4l-.1.1-.5-.3v-.4l.2-.3.2-.5h.4l.1.4-.1.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M626.1 383.4l-.4.2h-.1l-.3.2-.1-.1.1-.3.6-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M624.5 387.8l.3.3-1.1.2-.1-.5.7-.2z"
            className="United States Virgin Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M625.2 384l-.2.2h-.5v-.2l.3-.1z"
            className="United States Virgin Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M623.8 383.8l.4.3-.2.2-.3-.2h-.5l.2-.2z"
            className="United States Virgin Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M602 424.6h-.2l-.1-.5.1-.3-.1-.3-.4-.1-.3-.3.1-.3 1.2.6-.1.2v.4l-.2.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M634.3 389.6l-.2.1v-.2l.1-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M632.8 388.7h-.1l.1-.2.1.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M644 406.9v.2l.4-.1-.2.5.2.2v.2l.2.2.2.9-.3.3-.1-.4-.1.1-.6-.1h-.4l-.2-.3.6-.5h-.4l-.4-.4-.1-.5-.2-.5.3-.4.4.1.5.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M643 399.9h-.3l-.2-.4.1-.2.3-.3.3.2.1.3v.2z"
            className="Guadeloupe"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M641.2 397.3h.3V397.6l-.2.1V398.9l-.2.2-.6.3v-.2l-.2-.2-.1-.5v-.5l-.1-.5v-.3l.2-.3.3-.1.5.3z"
            className="Guadeloupe"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M642.6 396.9l.4.1.5.4-1.3.3-.3.1-.4-.3.1-.6.2-.1-.1-.6.1-.2.3-.2.3.4v.4z"
            className="Guadeloupe"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default NorthAmericaRegionMap;
