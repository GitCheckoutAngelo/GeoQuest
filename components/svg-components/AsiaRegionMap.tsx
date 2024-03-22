import React from 'react';

interface AsiaRegionMapProps {
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
function AsiaRegionMap(props: AsiaRegionMapProps) {
  const {
    height = 534.129,
    width = 586.905,
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
      viewBox="0 0 586.905 534.129"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-1144.602 -98.55) scale(.95436)">
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
            d="M1383 261.6l1.5 1.8-2.9.8-2.4 1.1-5.9.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7.8 2.5-.9 2.3-5.2-.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-.6-4 .9-.2 1.7h-4.1l-2.3 3.7.8 5.4-6.6 2.7-3.9-.6-.9 1.4-3.4-.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 .5-4.7.6-8 5.9 2.5 3.9-.9.4-2.9 4-.9 2.6-2-.2-5.1 4.2-1.3.3-2.2 2.9 1.7 1.6.2h3l4.3 1.4 1.8.7 3.4-2 2.1 1.2.9-2.9 3.2.1.6-.9-.2-2.6 1.7-2.2 3.3 1.4-.1 2 1.7.3.9 5.4 2.7 2.1 1.5-1.4 2.2-.6 2.5-2.9 3.8.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1296.2 336.7l1.3 5.1h-2.8v4.2l1.1.9-2.4 1.3.2 2.6-1.3 2.6v2.6l-1 1.4-16.9-3.2-2.7-6.6-.3-1.4.9-.4.4 1.8 4.2-1 4.6.2 3.4.2 3.3-4.4 3.7-4.1 3-4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1500.6 360.3l.6 4.6-2.1-1 1.1 5.2-2.1-3.3-.8-3.3-1.5-3.1-2.8-3.7-5.2-.3.9 2.7-1.2 3.5-2.6-1.3-.6 1.2-1.7-.7-2.2-.6-1.6-5.3-2.6-4.8.3-3.9-3.7-1.7.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7.3 1.2 4.5 5.4.9 5.1-.1 3.4 1.1-1.6 5.4-2.4.4-1.2 3.6 3.6 3.4.3-4.2h1.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1633.1 472.8l2.2-2.4 4.6-3.6-.1 3.2-.1 4.1-2.7-.2-1.1 2.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1488.8 323.5l2.6 2.1.5 3.9-4.5.2-4.7-.4-3.2 1-5.5-2.5-.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1602.2 381.9l-4.3 3.1-4.9-2-1-5.5 2.2-2.9 5.8-1.8 3.3.1 1.6 2.5-2 2.8z"
            className="China"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1625.6 185.5l9 4.5 6 5.8h7.6l2.6-2.4 6.9-1.9 1.3 5.7-.3 2.3 2.8 6.8.6 6.2-6.9-1.1-2.9 2.2 4.7 5.4 3.9 7.5-2.5.1 1.9 3.3-5.5-3.8v3.6l-6.4 2.7 2.8 3.4-4.6-.3-3.6-2-1.1 4.6-3.9 3.4-2.1 4.1-6.3 1.8-2.4 3-4.8 1.8 1.3-3-2.3-2.5 2-4.3-4.5-3.3-3.4 2.2-3.6 4.5-1.3 4.1-5 .3-1.3 3 4.8 4.3 4.8 1.1 1.4 2.8 5.1 1.9 3.8-4.6 5.9 2.5 3.5.2 2.3 3.3-6.7 1.8-1 3.5-3.8 3.2-.9 4.5 7.1 3.5 4.6 6.3 5.5 5.9 5.5 4.9 1.6 4.8-2.8 1.8 2.4 3.4 3.9 2 .8 5.2.1 5.1-2.8.6-2.1 6.9-2.3 8.5-3.4 7.6-6.4 5.9-6.6 5.5-6.1.7-2.9 2.8-2.3-2-2.5 3.1-7.2 3.3-5.8.9-.7 6.8-3.1.4-2.2-4.7.9-2.4-7.8-2.1-2.4 1.1-5.9-1.7-3.1-2.6.3-3.7-5.3-1.2-3.1-2.4-4.1 3.4-5.3.8-4.4-.1-2.7 1.6-2.7.9 2 7.4-3-.2-.8-1.5-.5-2.7-3.8 1.9-2.6-1.2-4.5-2.4.8-5.3-3.7-1.3-2.4-5.9-5.6 1.1-.7-7.6 4.2-5.4-.9-5.3-1.3-4.9-2.7-1.5-2.7-3.8-3.1.5-6.1-1 1.2-2.7-3.6-4-3.2 2.7-4.9-1.5-5.4 4-3.9 4.8-4.2.8-2.8-1.7-2.9-.2-4.3-1.4-2.6 1.6-2.6 4.8-1.5-5.1-3.1 1.4-6.5-.7-6.5-1.4-5-2.9-4.5-1.2-2.5-3.1-3.3-.9-6.4-4.2-4.8-2-1.9 1.5-8.6-4.5-6.2-4-3.2-7.1 4.1.9-.6-3.3-3-3.3-.8-5.2-7.7-7.6-9.5-2.5-2.9-5-4.7-3-1.5-1.8-1.8-3.6-.5-2.5-3.7-1.5-1.5.7-3.1-6 1.1-1.4-1.2-1.5 4.1-3 3.2-1.3 5.8.9.6-4.1 6.4-.7 1-2.6 6.9-3.4.2-1.4-1.7-3.7 2.9-1.6-8.8-11 9.1-2.5 2-1.4-1-11.3 10.8 2.1 1.6-2.9-2.5-6.2 3.8-.6 1.9-4.2 1.7-.5 3.3 4.4 5.7 3.3 8.2 2.3 5.8 5.1 1.4 7.3 3 2.8 6.5 1.1 7.2.8 8 4 3.4.7 5 5.8 4.7 3.8 5.6-.2 11.3 1.5 6.4-.9 5.6.9 9.4 3.9h6.2l3.3 1.9 4.4-3.4 7.2-2.2 7.6-.2 4.9-2.2 2-3.4 2.4-2.2-1.9-2.1-2.9-2.4.5-4.1 3.2.6 5.9 1.3 3.2-3.4 6.4-2.4 1.3-4.2 2.5-1.8 6.8-.8 4.4.7-.8-2.2-7.2-4.4-5.2-2-2.5 2.3-5.5-1-2.3.8-2.8-2.5-.3-6.3-.6-4.7 7.4 2.4 4.4-3.9-1.9-2.8-.2-6.5 1.3-2-2.5-3.4-3.7-1.4 1.7-3.1 5.1-1.1 6.2-.2 8.6 1.9 6 2.2 7.7 6.2 3.8 2.7 4.5 3.8 6.2 6z"
            className="China"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1667.5 567.6l-2.4.1-7.1-4.5 5.4-1.3 2.8 2 1.8 1.9z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1692.3 558.9l.5 1.3-.1 1.9-4.1 4.8-5 1.4-.6-.7.7-2.2 2.8-3.9z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1652.7 553.8l1.9 1.7 3.6-.5 1.2 2.7-6.7 1.3-3.9.9-3.1-.1 2.2-3.7h3.2z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1681 553.8l-1.1 3.6-8.6 1.8-7.5-.8.2-2.4 4.6-1.3 3.4 1.9 3.8-.5z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1600.8 545.3l10.8.7 1.4-2.7 10.3 3.1 1.8 4.2 8.4 1.2 6.7 3.8-6.6 2.4-6.1-2.6-5.1.2-5.8-.5-5.2-1.1-6.4-2.5-4.1-.6-2.4.8-10.2-2.7-.8-2.7-5.1-.5 4.2-6.1 6.8.4 4.4 2.5 2.4.5z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1748.7 541.7l-3.2 4.4-.2-4.8 1.1-2.3 1.3-2.2 1.2 1.9z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1707.3 524l-2.2 2.2-3.8-1.2-1-2.8 5.7-.3z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1725.7 521.7l1.8 4.9-4.6-2.7-4.7-.5-3.3.4-3.9-.2 1.5-3.5 7-.3z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1785.5 518.5l-1 20.9-1.6 21-4.6-5.3-5.6-1.3-1.5 1.8-7.2.2 2.8-5.2 3.7-1.8-1-7-2.3-5.3-10.7-5.5-4.6-.5-8.3-6-1.8 3.2-2.2.5-1.1-2.3.1-2.8-4.2-3.2 6.2-2.3 4 .1-.4-1.7h-8.3l-2.2-3.8-5-1.2-2.3-3.2 7.6-1.5 2.9-2.1 9.1 2.6.9 2.4 1.3 10.4 5.7 3.8 5-6.8 6.6-3.8h5l4.8 2.2 4.1 2.3z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1696.4 492.7l-4.5 6.4-4.3 1.2-5.4-1.2-9.5.3-4.9.9-.8 4.9 5 5.7 3.1-2.9 10.6-2.2-.5 2.9-2.5-.9-2.5 3.8-5.1 2.5 5.1 8.2-1.1 2.2 4.8 7.4-.3 4.2-3.1 1.9-2.1-2.3 3-5.2-5.7 2.5-1.3-1.8.8-2.5-3.9-3.8.7-6.2-3.9 1.9.2 7.5-.2 9.2-3.7.9-2.3-1.8 1.9-5.9-.6-6.2-2.4-.1-1.6-4.4 2.5-4.2.9-5.1 3-9.7 1.1-2.6 4.8-4.8 4.5 1.9 7.1.9 6.5-.3 5.6-4.6z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1716 494.6l-.3 5.6-2.9-.7-.9 3.9 2.3 3.4-1.6.8-2.2-4.1-1.7-8.2 1-5.1 1.8-2.3.5 3.5 3.4.5z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1608 488.9l1 4.3 3.9 3.7 3.7-1.3 3.6.4 3.3-3.2 2.7-.6 5.4 1.8 4.6-1.4 2.6-8.9 2.1-2.2 1.7-7.3h6.5l5 1.1-3 5.8 4.4 6-.9 3 6.4 5.9-6.7.8-1.8 4.4.2 5.8-5.5 4.4-.4 6.4-2.5 9.8-.7-2.3-6.6 2.9-2.1-3.9-4-.4-2.8-2.1-6.8 2.4-1.9-3.2-3.8.4-4.6-.7-.6-8.6-2.8-1.8-2.7-5.5-.8-5.6.6-6z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1585.2 539.4l-6.2.1-4.5-5.3-7.1-5.3-2.3-3.9-4.1-5.2-2.7-4.8-4.2-9-4.9-5.4-1.7-5.5-2.2-5-5.2-4-3.1-5.5-4.4-3.6-6.2-7.1-.6-3.3 3.6.3 8.9 1.2 5.2 6.3 4.6 4.4 3.2 2.6 5.5 6.9 5.8.1 4.8 4.4 3.4 5.4 4.3 3-2.3 5.2 3.3 2.2 2 .2.9 4.5 1.9 3.5 4.1.6 2.6 4.1-1.7 8z"
            className="Indonesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1427.6 308l-2.8 3-.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7.9 3.8 3.2 4.3.6 6.9 1.5 4.6-.1.1-2.5-1.5-4.1-.2-2.7 3.1-1.4 1.5 5.1.4 1.2 5.5 2.5 3.2-1 4.7.4 4.5-.2-.5-3.9-2.6-2.1 4.2-.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4.9 3.7-2 5.4.3 3.1-1.6 5.3-4.6-1.5.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2h-1.5l-.3 4.2-3.6-3.4 1.2-3.6 2.4-.4 1.6-5.4-3.4-1.1-5.1.1-5.4-.9-1.2-4.5-2.7-.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-.9 2.3 3.7 1.7-.3 3.9 2.6 4.8 1.6 5.3-.5 2.4-3.8-.1-6.6 1.3.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2.3 2.9-2.6 1.6-4.8 2.3-2.6.3-1.2 4.9 1.9 8.4.7 5.3-1.9 6.1.7 10.9-2.9.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-.8-7.8-1.7-6-7.7 3.9-4-.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3h12.1l-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6.8 5.2 3 3.3.6 3.3-4.1-.9 3.2 7.1 6.2 4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1229 253.2l1.8-.2 5.3-4.7 1.9-.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7.2-1.5 4.4-1.2 3-3.7 3.6.2 2-1.2 3.9.6 6.6 3.3 4.3.7 7.3 5.6 4 .3 1.7 5.3-.6 8-.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-.5-3.4h-1.7l.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1.5-5 2.3-2.2-.9-3.7-3.8-2-4.7-7.6-3.8-5.1.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1223.5 263.2l4.7 7.6 3.8 2 .9 3.7-2.3 2.2-.5 5 4.6 6.1 7.1 3.6 3.5 4.8-.2 4.7h1.7l.5 3.4 3.5 3.4-3.3-.3-3.7-.6-3.3 6.2-10.2-.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3.9 2.1 1.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1179.1 288.2l.4 2.6-.6 1h.1l-.7 2-2.1-.8-.7 4.2 1.5.7-1.3.9-.1 1.7 2.5-.8.4 2.5-1.8 10.2-.7-1.6-3.9-9.4 1.4-2.1-.4-.4 1.1-3 .6-4.8.6-1.7H1177.3l.4-1.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1198.1 295.3l-.9 1-10.4 3.2 6 6.5-1.6 1-.7 2.2-4.1.9-1.1 2.3-2.1 2-6.2-1.1-.3-.9 1.8-10.2-.4-2.5.6-1.9-.4-4 .7-2 6.3 2.6 9.7-6.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1708.5 282.6l1.6 2.2-1.3 3.9-3.1-2.1-2.1 1.5.1 3.7-4.3-1.8-1.2-3 1.3-3.9 3.4.8 1-2.7z"
            className="Japan"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1733.1 263.4l.6 5.1 2.5 3.2-.6 4.5-5.4 3-9.2.4-4.4 7.4-4.7-2.5-2.4-4.8-8.6 1.4-5.1 3-6.2.2 7.4 4.7.8 10.9-2.5 2.7-3.6-2.5-.9-5.8-4.1-1.8-4-4.4 4.3-2 1.1-4.1 3.9-3.3 2-4.4 9.7-1.9 6.3 1.3v-11.4l5.1 3.1 4.5-6.4 1.7-2.5-1-7.8-5.1-7.2-.2-4 4.8-1.2 8.2 8.9 2.8 5.1-1.3 6.5z"
            className="Japan"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1721.2 218.6l4.5 1.3 1.8-2.6 6 7.1-6.4 1.7-.4 6.3-10.9-4.3 1.6 6.9-5.7.1-4.7-6.3-.6-4.9 5.2-.3-4.4-8.8-1.8-4.9 10.5 6.6z"
            className="Japan"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1338.3 160.5l4.4-.3 9.2-5.8-.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-.9 4.4 3.8-1.9 4.2-3.8.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-.6-8.6-.2-1.6.7-8.2-2.7-2.5 1.4.5 3.7-9.2-2.2-3.1.9-.3 2.8-2.6 1.2-5.4 4.4-.9 4.6h-2l-2.3-3-6.7-.2-2.5-5.2-2.6-.1-1.5-6.4-7.6-4.6-8.6.5-5.7.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-.5-12 3.7 6.2 23.4-2.6.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-.6-1.6.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-.6-2.1 5.1.6-1-4.6 4.1-1 4.7.9-.7-6.1-1.9-3.9-5 .3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-.2-3.2-4.3-4.2-3.6.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-.6-4.5 8.1-6.7 7.6-.2 12 4.3 6.6 2.5 4.4-2.6 7.7-.1 7.3 3.2.8-1.9 7 .3.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1400.5 230.2l-.2 1.4-6.9 3.4-1 2.6-6.4.7-.6 4.1-5.8-.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5.5-.6-3.6 6 1 1.4-1.9 4.1.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-.6.3-2.8 3.1-.9 9.2 2.2-.5-3.7 2.5-1.4 8.2 2.7 1.6-.7 8.6.2 7.9.6 3.4 2.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1589.8 410.6l1.8 4.3.1 7.7-9 5 2.8 3.8-5.9.5-4.6 2.6-4.8-.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3.9 5 2.5 2-4.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1652.9 259.5v-.6l2.5.2.6-2.8 3.6-.4 2-.4V254l8.3 7.5 3.3 4.2 3.4 7.4-.5 3.5-4.3 1.2-3.1 2.7-4.6.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1247.5 309.4l1.5 2.8-.3 1.5 2.4 4.8-3.9.2-1.7-3.1-5-.6 3.3-6.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-.4-.8 2.2-3.2.2-1.9-1.1-5.3 3.8-1-5.8.4-6.7-3.8-.3-.9-3.9-2.7-2 .8-2.3 4.1-4.2.8 1.5 3 .2-2-7.4 2.7-.9 4 5.1 3.5 5.8h6.8l3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1179.1 288.2l-1.4.1-.4 1.1h-1.8l1.3-5.3 2.2-4.5v-.2l2.5.3 1.2 2.5-2.7 2.5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-.6 6.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1548.4 364.2l-4.1 4.2-.8 2.3-3 1.5-2.8 2.8-3.9.3-1.5 6.9-2.2 1.2 3.5 5.6 4.1 4.7 2.9 4.3-1.4 5.5-1.8 1.2 1.8 3.2 4.3 5.1 1 3.6.2 3 2.7 5.9-2.6 6-2.2 6.6-.9-4.8 1.3-4.9-2.2-3.8-.2-7-2.6-3.4-2.7-7.6-2-8.1-3.1-5.4-3.2 3.3-5.8 4.5-3.3-.5-3.6-1.5.9-8-2-6-5.3-7.4.3-2.3-3.4-.9-4.6-5.2-1.1-5.2 2.1 1-.6-4.6 2.5-1.5-1-2.7 1-2.2-.9-6.7 4.6 1.5 1.6-5.3-.3-3.1 2-5.4-.9-3.7 6.2-4.4 4.2 1.1-1.4-3.9 1.7-1.2-1-2.4 3.1-.5 2.7 3.8 2.7 1.5 1.3 4.9.9 5.3-4.2 5.4.7 7.6 5.6-1.1 2.4 5.9 3.7 1.3-.8 5.3 4.5 2.4 2.6 1.2 3.8-1.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1496.2 181.5l4-1.2 5.7-.8 5.4.9 6.6 2.9 4.9 3.2h4.6l6.8 1 3.6-1.6 5.9-1 4.4-4.4 3.4.7 3.9 2.1 5.6-.6.6 4.7.3 6.3 2.8 2.5 2.3-.8 5.5 1 2.5-2.3 5.2 2 7.2 4.4.8 2.2-4.4-.7-6.8.8-2.5 1.8-1.3 4.2-6.4 2.4-3.2 3.4-5.9-1.3-3.2-.6-.5 4.1 2.9 2.4 1.9 2.1-2.4 2.2-2 3.4-4.9 2.2-7.6.2-7.2 2.2-4.4 3.4-3.3-1.9h-6.2l-9.4-3.9-5.6-.9-6.4.9-11.3-1.5-5.6.2-4.7-3.8-5-5.8-3.4-.7-8-4-7.2-.8-6.5-1.1-3-2.8-1.4-7.3-5.8-5.1-8.2-2.3-5.7-3.3-3.3-4.4 4.7-1.1 6.7-5.3 5.9-2.9 5.3 1.9 5.2.1 4.8 2.9 5 .2 8 1.6 2.4-4.4-4-3.6 1.3-6.4 7 2.5 4.8.8 6.7 1.6 3.6 4.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1564.3 461.9l1.4.6 3.5 3.9 2.5 4.3.6 4.3-.5 2.9.6 2.2.5 3.8 2.1 1.8 2.3 5.7v2.1l-4 .5-5.5-4.8-6.8-5.1-.8-3.3-3.4-4.3-1-5.3-2.2-3.5.4-4.7-1.4-2.7.9-1.1 4.8 2.8.6 3.3 3.7-.8z"
            className="Malaysia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1654.1 475.3l-5-1.1h-6.5l-1.7 7.3-2.1 2.2-2.6 8.9-4.6 1.4-5.4-1.8-2.7.6-3.3 3.2-3.6-.4-3.7 1.3-3.9-3.7-1-4.3 4.2 2.2 4.3-1.2 1-5.4 2.4-1.2 6.8-1.4 3.8-5.1 2.6-4 2.8 3.3 1.1-2.2 2.7.2.1-4.1.1-3.2 4.1-4.4 2.6-5 2.3-.1 3.1 3.3.4 2.8 3.8 1.8 4.8 1.9-.2 2.5-3.8.3 1.1 3.2z"
            className="Malaysia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1469 322.9l.2 2.7 1.5 4.1-.1 2.5-4.6.1-6.9-1.5-4.3-.6-3.8-3.2-7.7-.9-7.8-3.6-5.8-3.1-5.8-2.4.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1283.8 394.9l-2.2-4.5-5.2-10.6 16.3-6.4 2.6-12.8-3-4.6v-2.6l1.3-2.6-.2-2.6 2.4-1.3-1.1-.9v-4.2h2.8l3 4.4 3.3 2.3 4.1.9 3.4 1.1 2.9 3.7 1.7 2.1 2 .9.2 1.4-1.7 3.8-.7 1.8-2.2 2.1-1.7 4.4-2.5-.4-1 1.6-.7 3.2 1.1 4.3-.5.8h-2.5l-3.3 2.4-.3 3.1-1.2 1.4-3.5-.1-2 1.6.2 2.6-2.6 1.8-3.1-.6-3.6 2.2z"
            className="Oman"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1296.2 336.7l-1.3-2.2 1.4-2.1.7.5-.2 2.7z"
            className="Oman"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5h-12.1l-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 .1-7.6.9 1.1-7.4 7.5-3.4-.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4.8.9-1.4 3.9.6 6.6-2.7-.8-5.4 2.3-3.7h4.1l.2-1.7 4-.9 2.1.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2.2.9-2.3-.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-.8 2.4-1.1 2.9-.8 4.7 3 2.9 5z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1700.5 447.8l.9 4.3.6 3.6-1.6 5.8-2.5-6.5-2.4 3.3 2.1 4.7-1.4 3-6.9-3.7-1.9-4.7 1.5-3-3.8-3.1-1.6 2.7-2.6-.3-4 3.6-1-1.9 1.8-5.4 3.4-1.8 2.9-2.4 2.2 2.9 4.2-1.7.7-2.9 4-.2-.8-4.9 4.9 3 .7 3.2z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1685.9 435.8l-1.8 2.1-1.4 4.1-1.6 1.9-3.9-4.4 1-1.8 1.3-1.8.2-3.9 3.1-.4-.5 4.3 3.6-6.2z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1655.6 442l-7.1 6.1 2.4-4.5 3.8-4 3-4.4 2.3-6.4 1.6 5.3-3.5 3.5z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1673.1 425.5l3.6 2h3.5l.2 2.6-2.3 2.8-3.4 1.9-.5-3 .1-3.3z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1693.2 423.7l2.4 7.2-4.5-1.7.3 2.2 1.8 3.9-2.6 1.5-.6-4.6-1.8-.3-1.2-3.9 3.3.5-.3-2.4-4-4.9 5.4.1z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1670.2 417.9l-.9 5.6-2.7-3.2-3.5-4.9 4.8.2z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1663.7 383l3.8 1.9 1.4-1.7.8 1.6-.4 2.7 2.6 4.6-.6 5.3-2.9 2.1-.1 5.2 2 5.1 3 .7 2.4-.7 7.5 3.5-.1 3.5 2.1 1.6-.3 2.9-4.7-3.1-2.5-3.4-1.2 2.4-4-3.9-5 1-3-1.4-.1-2.7 1.6-1.6-1.9-1.5-.4 2.3-3.3-3.7-1.3-2.8-1.1-6.1 2.6 2.1-1.1-10.1.8-5.8z"
            className="Philippines"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1660.3 229.9l1.4 1.1-2.2-.4-1 2.2-.3 2.1 2.8 4.6-1.9 1.4-.3 1.1-.9 1.9-2.9 1.1-1.4 1.7 1.3 2.7-.3.7 2.6 1.1 4.4 2.8v1.5l-2 .4-3.6.4-.6 2.8-2.5-.2v.6l-3.2-1.2-.1 1.2-1.3.5-.7-1.2-1.7-.6-1.9-1 .1-2.8.9-.8-1-1.1-.4-3.5-.9-1-3.4-.7-3.4-1.7 2.1-4.1 3.9-3.4 1.1-4.6 3.6 2 4.6.3-2.8-3.4 6.4-2.7v-3.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1178.3 293.8l.4 4-.6 1.9-2.5.8.1-1.7 1.3-.9-1.5-.7.7-4.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1270.1 343.7l-1.5.5-1.8-1.3-.8-4.7 1.1-3.3 1.5-.7 1.8 2 .5 3.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1240.5 315l5 .6 1.7 3.1 3.9-.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7.7 2.6-.4 2.2.9 2.1 1.8 1.8.9 2.1 1 1.6 1.8 1.3 1.5-.5 1.3 2.5.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1.3-5.5-.7-1.1-.6-6.4.1-1.5.6-2.4-1.6-1.3 3.1.8 2.7-2.4 2.1-.9-2.8-1.8-1.9-.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-.9-4.4v-3.8l-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4h-2.7l.5-3.5.1-2.3.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-.9.7-2.2 1.6-1-6-6.5 10.4-3.2.9-1 6.8 1.8 8.6 4.5 16.8 12.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1195 287.5l-9.7 6.9-6.3-2.6h-.1l.6-1-.4-2.6.9-3.5 2.7-2.5-1.2-2.5-2.5-.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-.2-3.5 1.9 1.2 5.6-1.8 3 1.2h4.4l5.7-2.4 2.9.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1577.5 410.2l-5.3-.9-7.1 1.2-3.1 5.3 2.1 7.8-5.3-3-4.8.2.3-5.1h-4.9l.2 7.1-2.2 9.4-1.4 5.7.7 4.6 3.7.2 2.7 5.9 1.3 5.5 3.4 3.7 3.4.7 3.1 3.4-1.7 2.6-3.7.8-.6-3.3-4.8-2.8-.9 1.1-2.3-2.4-1.2-3.2-3.2-3.6-2.9-3.1-.7 3.8-1.3-3.6.4-4 1.2-6.1 2.2-6.6 2.6-6-2.7-5.9-.2-3-1-3.6-4.3-5.1-1.8-3.2 1.8-1.2 1.4-5.5-2.9-4.3-4.1-4.7-3.5-5.6 2.2-1.2 1.5-6.9 3.9-.3 2.8-2.8 3-1.5 2.7 2 .9 3.9 3.8.3-.4 6.7 1 5.8 5.3-3.8 1.9 1.1 3.2-.2.8-2.2 4.3.4 5 5.2 1.3 6.4 5.3 5.6.4 5.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1357 243.6l-1.4 1.9-6-1 .6 3.6 5.5-.5 7.1 2.1 9.6-1 3.1 6 1.5-.7 3.7 1.5.5 2.5 1.8 3.6h-5.4l-3.8-.5-2.5 2.9-2.2.6-1.5 1.4-2.7-2.1-.9-5.4-1.7-.3.1-2-3.3-1.4-1.7 2.2.2 2.6-.6.9-3.2-.1-.9 2.9-2.1-1.2-3.4 2-1.8-.7 1.3-6.5-2.4-4.8-4.2-1.5.6-2.8 4.4.3 1.5-3.5.5-4.1 6.5-1.5-.2 3 1.3 1.7z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1338.3 262l-1.6-.2-2.9-1.7-.3 2.2-4.2 1.3.2 5.1-2.6 2-4 .9-.4 2.9-3.9.9-5.9-2.5-1.7-5.3-4-.3-7.3-5.6-4.3-.7-6.6-3.3-3.9-.6-2 1.2-3.6-.2-3 3.7-4.4 1.2-1.9-4.5-.6-6.7-4.6-2.2.4-4.3-3.5-.4-.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-.3 5.9-.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1692.7 562.1l.1-1.9-.5-1.3.8-1.5 4.9-1.4 4-.3 1.8-.8 2.1.8-2.2 1.8-6.1 2.8z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-.1 3.9z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1352.7 230.7l1.7.6-3 4.1 4.6 2.4 3.2-1.6 7.2 3.4-5.3 4.6-4.1-.6-2.1.1-1.3-1.7.2-3-6.5 1.5-.5 4.1-1.5 3.5-4.4-.3-.6 2.8 4.2 1.5 2.4 4.8-1.3 6.5-4.3-1.4h-3l-.8-3.9-7.7-2.8-6.3-3.1-4.2-3-7.1-4.4-4.3-6.6-2.1-1.2-5.5.3-2.3-1.3-1.9-5-7.9-3.4-3.4 3.7-3.8 2.2 1.7 3.2-5.9.1-6.2-23.4 12-3.7 1.1.5 9.2 4.5 4.8 2.4 6.6 5.7 5.7-.9 8.6-.5 7.6 4.6 1.5 6.4 2.6.1 2.5 5.2 6.7.2 2.3 3h2l.9-4.6 5.4-4.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1586.5 363.5l-6.5 5.4-3.7 6.1-.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-.5-2.8-3.8 9-5-.1-7.7-1.8-4.3.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6h-6.8l-3.5-5.8-4-5.1 2.7-1.6 4.4.1 5.3-.8 4.1-3.4 3.1 2.4 5.3 1.2-.3 3.7 3.1 2.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1283.8 394.9l-4 1.7-.9 2.9v2.2l-5.4 2.7-8.8 3-4.7 4.5-2.5.4-1.7-.4-3.2 2.7-3.5 1.2-4.7.3-1.4.4-1.1 1.7-1.5.5-.8 1.6-2.8-.2-1.7.9-4-.3-1.6-3.8v-3.5l-1-1.9-1.3-4.7-1.8-2.6 1.1-.4-.7-2.9.6-1.2-.4-2.8 2.4-2.1-.8-2.7 1.3-3.1 2.4 1.6 1.5-.6 6.4-.1 1.1.6 5.5.7 2.1-.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1689.5 177.4l13.7 11-8.9-2 3.7 9 9.6 6.4 3 4.4-6.5-3.8.1 4.9-4.7-5.3-3.8-6.1-5.6-6.7-2.4-4.8-6.4-8.2-8-6.1-6.8-8.4 1.9-2.8-4.4-2.8 1.3-.9 4.9 4 6.9 5.9 5.2 6.1z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1548.4 48.2l-5.9.1-8.9-.6-1-.3.7-2 4.2-.5 8.4 2z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1561 38.7l-1.1 2-6.9-.4-10.3-2-1.8-1.6 8.3.7z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1535.5 36.3l3.1 3.8-14.3-.2-4.6 1.2-12.5-3.3-3.4-3.4 3.5-.9 10.2.2z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1274.58 75.688l-1.78-3.088-5.9-2.9-.8-1.1-5.3-.6-.2-2.5-4.7-4.2-1.1-1.7 4.3-4.7-.6-4.8 2.2-1 11.4 1.4 2.9 2.9-.9 4.2 3.7 1.7 3.8 3.7 3.8 7.4 6.7 3.3.5 3.7-3.5 7.8 5.3.8.5-2 3.8-1.4-.5-2.7 1.9-2.7-4.4-3.1-.4-3.6-4.8-.4-2.9-3-.4-5.4-8.2-4.3 4.7-3.5-3.7-3.7 1.9-.1 4.2 2.8 2.1 5.1 5 1-4.6-3.8 5.1-2.1 8.1-.3 9.6 3-6.9-4.3-4.9-5.5 5.9-1 9.5.2 7.8-.7-5.6-2.6 1.3-3.3 4.2-.2 4.9-2.4 9.3-.7-.2-1.4 9.3-.4 4.3 1.1 5.4-2.6 7 .1-1.5-2.2.9-2 6.2-2 8.3 1.6-3.5 1.2 9.4.7 4.1 2.4 1.9-1.2 10.9.1 11.6 2.4 5.5 1.8 2.5 2.6-2.4 1.5-6.6 2.8-1.1 1.5 5.6.7 7.2 1.3 2.4-1 5.8 3.3.2-1.3 5.2-.8 13.6.8 3.8 2.4 17.4.8-4.8-3.9 9.5.9 6.1-.1 9.9 2.7 6 3.3.4 2.2 10.1 4.2 9 2.1-3-5.5 9.4 2.3 5-1.4 9.8 1.6 1-1.4 7.6.7-9.4-4.9 2.1-2.2 40.4 3.4 7.9 3.1 16.3 4 14.8-1 9.3.9 6.6 2.2 5.1 3.9 7.3 1.5 3.9-1.1 7-.1 9.3 1 6.9-.6 14.3 4.8 2.5-1.7-8.5-3.4-1.8-2.4 15.3 1.5 8-.3 15.8 2.5 9.5 2.4 33.2 22.1-2 2.5-6.2-.4 8.2 3 9.1 4.7 4.2 1.5 3.8 2.4 1 1.5-10-1.2-6.6 4.3-3 .7-1.6 4.1-2 3.6 1.7 2.7-11.5-4.1-6.1 4.6-4.7-2.2-1.4 2.6-7-.9 3.1 3.9 1.1 5.8 2.9 2.4 6.8 1.3 9.1 8.7-4.1.3 3.4 5 4.7 2.6-5 3.1 5.4 7-5.7 1.5 4.5 6.2-1.7 5.8-5.7-4.3-10.5-8.9-16.2-13.6-6.5-8.3.1-3.6-2.8-2.8 5.7-1.3-.2-7.5.7-6 2.5-4.7-6.6-8.2-4.7.5 3.2 4.8-3.6 6.4-12.3-7.2-9.1 2v9.8l7.7 3.6-8.5 1.6-6.4.6-4.3-4.3-8-.9-2.5 2.9-15.1-1-13.2 1.7-3.5 11.7-5 14.2 8.2.8 5.7 3.8 5.8 1.3.4-3 5.6.4 12.8 6.7 4.7 5.2 1.4 6.2 5.5 7.4 5.3 9.9-1 9.1 1.3 4.3-2 7.4-2.1 7.3-.9 3.7-4.6 3.7-3.1.1-5.2-3.1-4.1 4.7.5 2.1-1.4-1.1-1.9-3.3 2.5-.1-3.9-7.5-4.7-5.4 2.9-2.2 6.9 1.1-.6-6.2-2.8-6.8.3-2.3-1.3-5.7-6.9 1.9-2.6 2.4h-7.6l-6-5.8-9-4.5-10-2-6.2-6-4.5-3.8-3.8-2.7-7.7-6.2-6-2.2-8.6-1.9-6.2.2-5.1 1.1-1.7 3.1 3.7 1.4 2.5 3.4-1.3 2 .2 6.5 1.9 2.8-4.4 3.9-7.4-2.4-5.6.6-3.9-2.1-3.4-.7-4.4 4.4-5.9 1-3.6 1.6-6.8-1h-4.6l-4.9-3.2-6.6-2.9-5.4-.9-5.7.8-4 1.2-8.5-2.6-3.6-4.6-6.7-1.6-4.8-.8-7-2.5-1.3 6.4 4 3.6-2.4 4.4-8-1.6-5-.2-4.8-2.9-5.2-.1-5.3-1.9-5.9 2.9-6.7 5.3-4.7 1.1-1.7.5-4.4-3.8-6 .9-3.3-2.7-4-1.2-4.1-3.6-3.3-1.1-6.2 1.6-8.4-3.5-1.1 3.2-18.3-15.6-8.4-4.7.8-2-9.2 5.8-4.4.3-1.1-3.3-7.1-2.1-4.3 1.5-4.4-6.3-9.1-1.3-3.1 2.5-10.9 2.3-1.7 1.5-17 2.1z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1367.1 23.1l-18.1 1.8-1.3-6.1 2.2-.5 3.1.3 12.6 2.6z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1345.1 20.4l-7.1.6-11.7-1.3-8.1-1.7-6.6-3.2-5.9-.8 5.4-2.9 6.2-.9 9.6 2 13.7 4.2z"
            className="Russian Federation"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1264.1 333.3l.3.1.2-.1.4.7-.1.2.1.9v.7l-.2.4-.1-.4-.6-.8.1-.4-.2-.7v-.4z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1766.5 440.5l.1.3h-.3l-.3.5-.1-.1.3-.8.4-.1z"
            className="Federated States of Micronesia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1402.9 474.8v.2l-.2-.1.2-.2z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1747.7 453.1l-.2.4.1.1-.2.6.1.2-.5.2-.2-.7.3-.2-.2-.2.3-.6.3-.1z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default AsiaRegionMap;
