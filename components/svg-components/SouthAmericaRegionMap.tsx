import React from 'react';

interface SouthAmericaRegionMapProps {
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
function SouthAmericaRegionMap(props: SouthAmericaRegionMapProps) {
  const {
    height = 416.933,
    width = 254.119,
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
      viewBox="0 0 254.119 416.933"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-527.322 -490.316) scale(.95436)">
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
            d="M669.1 851.7l-3-.2h-5l-6-13.6 3.1 2.8 4.3 4.6 7.8 3.7 7.3 1.5-.8 3-4.4.3z"
            className="Argentina"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M638.6 644.7l11.3 10.4 4.6 1 7.3 4.8 5.9 2.5 1.1 2.8-4.2 9.8 5.8 1.7 6.3 1 4.2-1 4.3-5 .3-5.6 2.6-1.3 3.2 3.8.4 5.1-4.2 3.5-3.3 2.6-5.3 6.3-6 8.7-.5 5.2-.4 6.6 1.2 6.4-.9 1.4.4 4.1.3 3.4 7.8 5.5.2 4.4 3.9 2.8.3 3.1-3.3 8.2-7 3.5-10.2 1.3-6-.7 2.1 3.9.1 4.7 1.8 3.2-2.5 2.3-5.1.9-5.6-2.4-1.5 1.7 2.5 6.3 4 1.9 2.3-2 2.5 3.3-4.2 2-2.9 4 1.2 6.3-.1 3.4h-4.8l-3 3.2.1 4.8 6.5 4.6 5.2 1.2.2 5.7-4.6 3.5-.6 7.3-3.5 2.4-.9 2.9 4.2 6.5 4.6 3.5-2.1-.3-4.9-1-12.1-.8-3.5-3.6-1.9-4.6-3.1.4-2.6-2.3-3.1-6.5 2.7-2.8.1-3.9-1.8-3.2.7-5.4-1.1-8.3-1.8-3.7 1.8-1.2-1.4-2.4-2.8-1.2.8-2.7-3.1-2.4-3.7-7.3 1.7-1.3-3.3-7.8-.8-6.5-.2-5.7 2.5-2.3-3.3-6.3-1.6-5.8 3-4.2-1.4-5.4 1.6-6.2-1.4-5.9-1.6-1.2-4.9-11.1 2.1-6.6-1.7-6.2.9-5.9 2.6-6 3.3-4-2-2.5.8-2.1-1.6-10.7 5.6-3.1 1.2-6.7-.9-1.6 4-5.8 7.5 1.6 3.7 4.6 1.6-5.2 6.4.3z"
            className="Argentina"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M662.5 631.4l-.3-2-5.4-3.3-5.2-.1-9.6 1.9-2.1 5.6.2 3.5-1.5 7.7-1-1.4-6.4-.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-.3-5.4v-4.6l1.1-2.1-5.5-10.4 4.2.6 2.9-.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-.4 4.8.9 2.5-.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8h3.5l3.4 1.9.5 3.7 1.2 1.9.3 2.7-1.7.1 2.8 7.5 10.7.3-.5 3.7.8 2.5 3.2 1.8 1.7 4-.6 5.1-1.3 2.8.8 3.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M665.8 489.6l3.1.6.6-1.4-1-1.2.6-1.9 2.3.6 2.7-.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3.2.8 1.8 2.7-.4 2.2-2.5 1.8-4.7 3.4-5.9 2-.3 1.3 3.6 3 11.2 3.1 1.1.1 4.4-4.3 5.3 1.7 1.9 10.1 1 .2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-.9 3.6 6.6-2 11 3.4 8.5-.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4.2-1.3 4.7.9 12-1.1 9.9-.3 4.2-1.6 2.6-.5 8.6-5.2 8.3-.5 6.7-4.3 2.7-1.1 3.9h-6l-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-.3 4.8 1.3 3.5-.3 6.5-.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9.2-6.3-5-3.4.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-.4-5.1-3.2-3.8-2.6 1.3.7-3.7.3-3.8-.3-3.6-2.1-1.1-2 1-2.1-.3-.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-.4-8.7-2-3.5 1.6-1.4-.8-3.6 1.3-2.8.6-5.1-1.7-4-3.2-1.8-.8-2.5.5-3.7-10.7-.3-2.8-7.5 1.7-.1-.3-2.7-1.2-1.9-.5-3.7-3.4-1.9h-3.5l-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7.3-4.3-.9-2.5.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9.2-4.2-.6-3.2 1.1-2.6-.7-.1-9.7-4.4 3.7-5-.1-2.3-3.5-3.8-.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-.2-2.8 3.4-1.8-.7-3.5 1.4-2.2.3-3 6.3-4.4 4.6-1.2.8-1 5.1.3 2.2-17.6.1-2.8-.9-3.6-2.6-2.4.1-4.7 3.2-1 1.1.7.2-2.5-3.3-.7v-4l11 .2 1.9-2.3 1.6 2.1 1 3.8 1.1-.8 3.1 3.4 4.4-.4 1.1-2 4.2-1.5 2.4-1.1.7-2.7 4.1-1.8-.3-1.4-4.8-.5-.7-4.1.3-4.3-2.5-1.6 1.1-.6 4.1.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-.7-1.8 3-.2 1.2 1.4-.8 2.9 2 .9 1.2 3-1.6 2.3-1 5.4 1.4 3.3.3 3 3.5 3 2.8.3.6-1.3 1.8-.3 2.6-1.1 1.8-1.7 3.2.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M584.4 426.2l-3.7 1.1-1.6 3.2-2.3 1.8-1.8 2.4-.9 4.6-1.8 3.8 2.9.4.6 2.9 1.2 1.5.3 2.5-.7 2.4.1 1.4 1.4.5 1.2 2.2 7.3-.6 3.3.8 3.8 5.6 2.3-.7 4.1.3 3.2-.7 2 1.1-1.2 3.4-1.3 2.2-.6 4.6 1.1 4.3 1.5 1.9.2 1.4-2.9 3.2 2 1.4 1.5 2.3 1.6 6.4-1.1.8-1-3.8-1.6-2.1-1.9 2.3-11-.2v4l3.3.7-.2 2.5-1.1-.7-3.2 1-.1 4.7 2.6 2.4.9 3.6-.1 2.8-2.2 17.6-2.9-3.4-1.7-.1 3.5-6.6-4.4-3-3.4.6-2.1-1.1-3.1 1.7-4.2-.9-3.5-6.7-2.6-1.6-1.8-3.1-3.8-3-1.5.6-2.4-1.5-2.8-2.1-1.6 1-4.8-.9-1.4-2.8-1.1.1-5.6-3.6-.7-2 2.1-.5-.2-3.2 1.4-2.4 2.8-.4 2.5-4 2.2-3.4-2-1.5 1.2-3.7-1.1-5.9 1.3-1.7-.7-5.4-2.2-3.5.9-3.1 1.8.5 1.1-1.9-1.1-3.8.7-.9 2.9.2 4.5-4.5 2.4-.7.1-2.1 1.4-5.5 3.4-2.9 3.5-.2.6-1.3 4.4.5 4.6-3.2 2.3-1.4 2.9-3.1 2 .4 1.3 1.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M559 502.8l.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-.9 4.3-3.1 2.7-2.5-3.3-2.3-.7-2.3.5-.3-2.3 1.6-1.5-.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-.1 1.4 2.8 4.8.9 1.6-1 2.8 2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M662.9 463.5l-1 5.8-3.5 1.6.3 1.5-1.1 3.4 2.4 4.6h1.8l.7 3.6 3.3 5.6-1.3.3-3.2-.6-1.8 1.7-2.6 1.1-1.8.3-.6 1.3-2.8-.3-3.5-3-.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-.9.8-2.9-1.2-1.4-3 .2-3.7-4.8 1.6-1.8v-3l3.5-1 1.4-1.2-1.8-2.4.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1.1 3.4 2.1.1 3 3.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M590.5 529.4l-5.1-.3-.8 1-4.6 1.2-6.3 4.4-.3 3-1.4 2.2.7 3.5-3.4 1.8.2 2.8-1.5 1.1 2.6 5.8 3.3 3.9-1 2.8 3.8.3 2.3 3.5 5 .1 4.4-3.7.1 9.7 2.6.7 3.2-1.1 5.5 10.4-1.1 2.1v4.6l.3 5.4-1.9 3.2 1.2 2.4-1.1 2.2 2.9 5.4-2.9 6.9-1.1 3.3-2.8 1.6-5.9-3.7-.8-2.6-11.7-6.4-10.7-7.1-4.7-3.9-2.8-5.3.8-1.9-5.4-8.4-6.4-11.8-6-12.8-2.4-3-2-4.7-4.6-4.2-4.1-2.6 1.7-2.8-3-6.2 1.7-4.5 4.4-4 .7 2.7-1.6 1.5.3 2.3 2.3-.5 2.3.7 2.5 3.3 3.1-2.7.9-4.3 3.4-5.6 6.7-2.5 6.1-6.8 1.7-4.1-.8-4.9 1.5-.6 3.8 3 1.8 3.1 2.6 1.6 3.5 6.7 4.2.9 3.1-1.7 2.1 1.1 3.4-.6 4.4 3-3.5 6.6 1.7.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M662.5 631.4l2 3.5.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9.8 2.4 2.1.3 2-1 2.1 1.1.3 3.6-.3 3.8-.7 3.7-.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-.2-3.5 2.1-5.6 9.6-1.9 5.2.1 5.4 3.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M681 464.9l-3.1 5.5.3 4.4 2.2 3.8-1.1 2.7-.5 3-1.5 2.7-3.2-1.4-2.7.7-2.3-.6-.6 1.9 1 1.2-.6 1.4-3.1-.6-3.3-5.6-.7-3.6H660l-2.4-4.6 1.1-3.4-.3-1.5 3.5-1.6 1-5.8 6.8 1.3.6-1.2 4.6-.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8.7-5.5-2.7-3.6.2-3.9-3.6-.4-4.1.9-1.4-1.2-6.4.4-6.6.5-5.2 3.4-.7 6.3 5 1.9-.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M648.7 448.1l-4.7 3.8-.5 2.3 1.8 2.4-1.4 1.2-3.5 1v3l-1.6 1.8 3.7 4.8.7 1.8-2.1 2.5-6.4 2.4-4.1 1-1.7 1.5-4.5-1.6-4.1-.8-1.1.6 2.5 1.6-.3 4.3.7 4.1 4.8.5.3 1.4-4.1 1.8-.7 2.7-2.4 1.1-4.2 1.5-1.1 2-4.4.4-3.1-3.4-1.6-6.4-1.5-2.3-2-1.4 2.9-3.2-.2-1.4-1.5-1.9-1.1-4.3.6-4.6 1.3-2.2 1.2-3.4-2-1.1-3.2.7-4.1-.3-2.3.7-3.8-5.6-3.3-.8-7.3.6-1.2-2.2-1.4-.5-.1-1.4.7-2.4-.3-2.5-1.2-1.5-.6-2.9-2.9-.4 1.8-3.8.9-4.6 1.8-2.4 2.3-1.8 1.6-3.2 3.7-1.1-.2 1.5-3.4.8 1.7 2.9-.3 3.4-2.7 3.7 1.9 5.1 2.5-.4 1.5-4.7-1.7-2.2v-4.9l7.2-2.6-.6-3 2.1-2.1 1.7 4.6 4 .1 3.4 3.5.2 2.2h5l6.1-.6 3.1 2.8 4.2.8 3.3-2 .1-1.6 7.1-.4 6.7-.1-4.9 1.9 1.8 3.1 4.5.4 4.2 3.2.7 5.1 2.9-.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M655.1 837.9l6 13.6h5l3 .2-.5 2.4-3.2 1.9-2.4-.2-3.1-.5-4.2-1.8-5.4-.9-7.5-3.4-6.4-3.2-9.8-6.9 4.6 1.3 8.6 4.1 7.3 2.2 1.2-2.8-.3-4.2 3.4-2.6z"
            className="Chile"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M614.4 647.8l.9 1.6-1.2 6.7-5.6 3.1 1.6 10.7-.8 2.1 2 2.5-3.3 4-2.6 6-.9 5.9 1.7 6.2-2.1 6.6 4.9 11.1 1.6 1.2 1.4 5.9-1.6 6.2 1.4 5.4-3 4.2 1.6 5.8 3.3 6.3-2.5 2.3.2 5.7.8 6.5 3.3 7.8-1.7 1.3 3.7 7.3 3.1 2.4-.8 2.7 2.8 1.2 1.4 2.4-1.8 1.2 1.8 3.7 1.1 8.3-.7 5.4 1.8 3.2-.1 3.9-2.7 2.8 3.1 6.5 2.6 2.3 3.1-.4 1.9 4.6 3.5 3.6 12.1.8 4.9 1h-4.3l-1.7 1.5-3.4 2.2 1.7 5.7-1.9.1-6.3-1.9-7.5-4.3-7.6-3.5-3.2-3.9-.3-3.6-4.2-4.2-5-10.6-.2-6 3.4-4.8-8.3-1.9 2.7-5.5-2-10.5 6.5 2.2-1.8-13.1-4-1.7 1 7.9-3.5-.9-1.5-9-2-11.8 1.1-4.4-3.3-6.2-2.4-7.2 2.2-.3.6-10.3 1.2-10.3.1-9.5-3.3-9.7.6-5.3-2.1-7.9 1.8-7.8-.9-12.4v-13.4l.1-14.3-1.5-10.5-2.1-9.1 2.8-1.6 1.1-3.3 3.2 4.4 1.2 4.6 3.2 2.7-1.1 6.2 3.7 7.2 3.1 8.9z"
            className="Chile"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M677.3 487l1.5-2.8.5-2.9 1-2.7-2.1-3.8-.3-4.4 3.1-5.5 1.9.7 4.1 1.5 5.9 5.4.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7.4-.8-1.8-1.3-.2-1.7 1.7z"
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
            d="M599 424.5h-.3l-.4-.3-.3-.1-.3-.3-.1-.2-.3-.1-.2-.4-.3-.3.1-.5.5.3.1.5.4.4.7.2.2.3.3.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M697.4 836.2l.4-.1v.4l-.8-.3.3-.3.2-.1z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M696.7 834.8l.2.2.4.1.1.4-.3.1-.1-.4-.2-.2z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M702.9 834l.2.1-.1.4-.3-.1-.2-.3.3-.2z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M690.8 833.1v.2l.1.3-.4.1-.3-.1-.2-.2-.3-.1-.1-.4h.2l.1-.2.3-.1.2.1-.3.3.3.1.3-.3z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M693.7 831.8l-.4-.2-.5-.3-.8-.3.1-.4-.7-.1-.3-.1-.3-.4.2-.1.8.3.8.4.5.1.4.1.3-.3.1-.3.2.1.4-.2.1.2h.5v.3h.3l.9-.2.1.2h.3l.4-.1-.3-.2-.1-.3h.4l.6.2.1.4-.4.5.1.3-.2.2h-.4l-.3.8-.3.3-.3.6-.1.3-.5.3-.1-.2h-.4v.3l-.8-.1-.1.1.3.4-.1.1-.2.4h-.4l-.3.4-.3.1h-.2l-.2-.3-.4-.3v-.2h-.5l.6.4h-.4l-.5-.3-.2-.1-.4-.2-.3-.2v-.2l.7.2.6-.2-.5-.2-.1-.1h.9l.4.1.3.2v-.2l.4-.1.1-.3-.4-.2-.2-.5.1-.2h.6l.2.1.4-.1-.1-.3h-.8v.1l-.4.2h-.6l-.5-.3v-.3l.7.2.6-.2h.3l.5-.1.4.2v-.1z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M695.3 829.9h.3l.3.3-.3.1h-.3z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M694.3 829.9h-.3l-.1-.3.4.1z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M692.9 829.7l.6-.1.2.3-.3.4-.2-.1-.3.1-.3-.2.3-.2.3.2.1-.2-.5-.1z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M700.1 829.8h.6l.1-.1.5-.1.4.2.4.3.1.3v.1l-.5.1-.2-.3-.2-.1-.1.3.2.1.1.3.3-.2.2.1.1.4.3.1.1-.1.5.3.1-.4-.8-.2.1-.5.3-.2 1.5-.1.7.6.2.1v.4l-.6-.1-.5-.2-.6.2.3.2.4.1.9.1.3.1.1.2-.2.5h-.5l-.1.1-.7.1-.5.2.3.2-.9.4-.4-.1-.5.1h-.7l-.6-.2-.6-.4v.3l.3.2.6.2.3.3.2-.1.4.1.4.3-.2.1.2.5h-.2l-.3-.3-.4-.1-.5.4-.2-.3-.3-.2h-.3l-.5-.2-.2.1.2.4h.3l.2.2-.2.1.7.6-.2.1-.4-.2h-.3l-.3-.3-.3-.1-.3-.1-.1.6.5.1v.3l-.1.2-.4-.1-.1-.2-.5-.2-.1-.2h-.2l-.4-.5.3-.4v-.2l-.4-.5v-.2l.5-.2-.1-.2.5-.1-.1-.3.6-.4.6-.2.4.4v.4l.3-.1-.5-.6.1-.3-.6-.2-.4-.3.1-.2.4.2.1-.5-.7-.2.1-.3.2.1.3-.2h.3l.2-.3-.3-.3h.4z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M695.1 829.4h.7l.2.2.2-.2.2.1.2.3-.2.1-.4-.1-.4-.2-.8-.1.1-.2z"
            className="Falkland Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M688.3 828.3l-.5-.1.1-.2z"
            className="Falkland Islands"
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
            d="M642.8 432.2l-.2.5-.3.4-.2.1-.1.4.2.6-.2.1v.7l.2.3.2.2-.2.2-.1.3v.7l-.2.1-.4.2-.5.1h-.3l-.5.1-.5-.1-.4.1-.3-.1-.5.2-.4-.2h-.6l-.3.2-.3-.1.5-.2.3-.3.4-.1.4-.3.2-.3.6.1.3-.4-.2-.8.2-.4v-.7l-.3-.4-.3-.1-.4-.1-.1-.1.4-.3 1.1-.1.2-.2h1.1l.1-.1 1.2-.2z"
            className="Trinidad and Tobago"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M645.2 429l-.1.5-.3.1-.4.3h-.2l-.7.4-.2-.2.3-.3.7-.5z"
            className="Trinidad and Tobago"
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
        </g>
      </g>
    </svg>
  );
}

export default SouthAmericaRegionMap;
