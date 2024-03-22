import React from 'react';

interface OceaniaRegionMapProps {
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
function OceaniaRegionMap(props: OceaniaRegionMapProps) {
  const {
    height = 283.609,
    width = 379.236,
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
      viewBox="0 0 379.236 283.609"
      xmlSpace="preserve"
    >
      <g display="inline" transform="translate(-1556.027 -570.768) scale(.95436)">
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
            d="M1743 763.6l3.7 2.2 3.3-.9 4.9-1.2 2.8.4-4.5 7.6-3.3 2.1-4 5.2-.6-1.8-6.6 4.4-.8-.3-3-.2.5-5.4 2-4.2.6-5.6 2-2.9z"
            className="Australia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1793.5 590.2l1.2 5 4-2.4 1.4 2.7 2.3 2.5-1.1 2.9.2 5.5.2 3.2 1.3.8.4 5.5-1.2 3.3.8 4.3 5.4 3.4 3.2 3 3.2 2.8-1.1 1.6 2.3 4 .5 7 2.6-1.4 1.5 2.7 1.6-.9-.7 6.8 2.9 3.9 1.9 2.4 2.8 5.2v5.2l-1 3.7-1.8 3.9.7 5.5-2.5 5.7-2.1 3-3.8 5.7-1.5 3.7-3.1 4.6-5 5.8-5.5 3.2-4.4 4.9-3.3 3.2-4.4 5.5-3.7 3.2-3.9 4.8-3.1 4.4-.8 2.1-4.3 2.2-6.1.2-6.3 2.7-3.8 2.4-4.8 2.8-2.7-2.9-2.6-1.1 2.6-3.3-3.5 1.2-7.2 4.6-3.6-1.7-2.4-1-2.8-.5-4.1-1.8-1.3-4 1.5-4.8.4-3.3-1.4-2.6-4.7-.7 3.2-3.2.9-4.7-4.7 4.4-5.3 1.2 4.5-3.5 2.5-3.7 3.5-3.2 1.6-4.7-6.8 5.4-4.3 2.2-4.3 5.1-3-2.6 1.7-3.4-1.4-4.7-1.8-2.4 1.6-1.5-5.3-3.9-3.8-.1-4-3.2-9.9.6-7.9 2.3-6.9 2.2-5-.4-7 3.3-5.3 1.4-2.3 3.4-3 2.6-4.7.2-3.6.5-4.2-1.1-4.2.7-3.8.3-4.5 3.4-1.5-.3-3.4 1.8-3.4 2-3.8-.2h-3.5l-4.1-4.1-2.4-1.2 1.5-3.7 2.9-.9 1.5-1.4.6-2.3 2.3-4.5.7-3.8-.7-6.5.2-3.7 1.4-3.6-.9-4.2.3-1.9-1.7-2.6.7-5-1.9-5.1-.1-2.7 1.8 2.8-.5-6 2.3 1.9 1.1 2.5.6-3.3-1.6-5.1-.1-2-.8-1.9 1.3-3.7 1.5-1.6 1.3-3.2.1-3.8 3.1-4.6-.4 4.9 3.1-4.4 4.9-2.2 3.2-2.7 4.7-2.4 2.6-.5 1.4.8 4.8-2.4 3.5-.7 1.1-1.4 1.5-.6 3.1.2 6.2-1.9 3.5-2.9 2-3.4 3.9-3.2.7-2.6.7-3.5 4.9-5.5 1.4 5.6 2.6-1.3-1.5-3 2.3-3.1 2.2 1.4 1.5-4.9 3.5-3.2 1.8-2.5 2.9-1.1.4-1.8 2.3.7.4-1.6 2.6-.9 2.8-.9 3.7 3 2.6 3.8h3.5l3.5.6-.7-3.5 3.5-5.1 2.7-1.7-.6-1.6 2.9-3.7 3.7-2.3 2.7.8 4.9-1.2.3-3.3-3.9-2.1 3.1-.9 3.6 1.6 2.7 2.6 4.5 1.6 1.7-.6 3.3 2 3.5-1.9 2 .6 1.5-1.3 2.2 3.2-2 3.5-2.5 2.6-1.9.2.3 2.5-2.2 3.2-2.5 3.2.2 1.8 3.8 3.6 4 2 2.5 2.2 3.3 3.8h1.6l2.6 1.7.5 2 4.9 2.1 4.1-2.2 1.8-3.4 1.7-2.9 1.3-3.5 2.6-5.1-.2-3.1.7-1.9-.1-3.6 1.4-4.9 1.3-1.3-.6-2.1 1.8-3.4 1.5-3.5.4-1.9 2.3-2.4 1.3 3.2-.1 4 1.3.8-.1 2.7 1.6 3.2-.1 3.7z"
            className="Australia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1868.1 545.6l-1.6.7-2.3-2.5-2.2-4.1-.8-4.9.8-.6.5 1.9 1.6 1.5 2.4 4 2.5 2.2z"
            className="Papua New Guinea"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1846.7 537l-3 .5-1 1.8-3.2 1.6-3 1.5h-3.1l-4.5-1.9-3.1-1.8.6-2 5 1 3.2-.5 1-3.1.9-.2.3 3.4 3.2-.4 1.8-2.2 3.3-2.3-.4-3.8 3.4-.1 1.1 1-.4 3.6z"
            className="Papua New Guinea"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1782.9 560.4l1.6-21 1-20.9 9.6 4.4 10.3 3.7 3.7 3.3 3 3.2.6 3.8 9.2 4 1.1 3.4-5.2.7.9 4.3 4.7 4.2 3 6.8 3.3-.2-.6 2.8 4.3 1.1-1.8 1.2 5.7 2.7-.9 1.9-3.8.4-1.2-1.6-4.7-.8-5.6-.9-4-4.1-2.8-3.6-2.5-5.6-7.1-2.8-4.9 1.8-3.7 2.2.3 4.7-4.6 2.2-3.1-1.1z"
            className="Papua New Guinea"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1853.6 530.7l-1.8 1.7-.9-3.8-1.1-2.4-2.5-2.1-3.1-2.8-4-1.9 1.6-1.5 3 1.8 1.9 1.4 2.3 1.5 2.1 2.7 2.1 2.1z"
            className="Papua New Guinea"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1886.2 764.4l-.8 2.6 5.6-2.6-.5 2.7-2.1 2.7-4.2 2.9-7.1 4.7-4.7 2.6-.6 3-4 .1-6.3 2.4-4.7 4.1-8.2 6.4-6.3 2.8-4 1.8-4.6-.1-1.5-2.1-5.1-.4 1-2.4 6.5-4.6 11.4-6.3 4.3-1.2 5.6-2.4 7-3.3 5.7-3.3 6-4.7 3.1-1.6 3.5-3.6 5.8-2.9z"
            className="New Zealand"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1915.2 733.9l-.4 6.8 2.9-4.4 1.3 1.8-2.4 4.8 2.9 2.1 3.2.5 4.7-2.4 2.2.7-5.2 5.7-4.2 3.7-3.9-.1-2.8 1.9-1.5 2.8-1.6 1.1-4.6 3.5-5.9 4.3-6 2.6.5-1.7-1.5-.9 6.9-5.2.9-3.6-3.8-2.5 1.8-2.3 5.3-2.2 4.2-5 2.5-4.1.6-4.3.8-1.1-.9-2.7-.7-5.6.4-4.6 2.2-.5.9 3.6 3.2 1.6z"
            className="New Zealand"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1915.2 646.9l-.2.1-.2.4-.4-.2.2-.5.1-.2.3.1z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1919.6 639.1l-.1.1.2.4h.3l.4-.2-.1.6-.2.2-.1.4-.5.3-.4-.2v-.1l-.3-.3.1-.2-.2-.2.1-.4-.1-.4h.1l.4.1z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1916.9 634.8l-.2.5v.4l-.2.3.3.2.2.1.1.2-.1.2.3.4h-.2l-.2.5-.2.2-.3-.1-.2-.3-.1-.2-.6-.1-.3-.5v-.2l-.1-.3h.3l.3-.2.4-.3.1-.3-.4-.2-.4.1.2-.4.3-.1.2.1.4-.3z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1913.5 633.2l-.3.6-.1.3h.3l-.5.5-.2.2-.1-.2.3-.4.2-.5z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1913.5 633.2l-.2-.4h.4l.1.4z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1899.6 630.8l.2.1.5.9.3.3.3-.1.2-.3.9.5.3.5.7.6.3.4.1.3.4.4.1.2h.2l.3.3.9.2.1.3v.4l.3.4.4.1-.3.5.1.2.4.5h.1l.4.5-.1.4.7.2.4.5h.3l.3.2.5.4-.1.3h.3l.4.5.6.4v.2l.3.1.3.3v.2l.3.6.4.4.1-.1.4.6.5.1.3.3v.4l.1.4.1.1-.2.6-.7.4-.1-.3-.3.1-.3.3-.6-.8h-.4l-.1-.2h-.2l-.2.3-.9-.9h-.2l-.4-.5.1-.8h-.7l-.3-.2-.1-.2-.2-.1h-.3v-.3l-.2-.5-.4.1-.8-.5-.1-.2v-.3l-.3.2-.6-.3-.1-.4-.4-.3-.2-.5-.5-.1.2-.2-.3-.3-.3-.1-.3-.7v-.4l-.2-.3h-.3l-.2-.6.1-.2-.7-.4-.3-.2-.4-.6.3-.2-.2-.2-.2-.3v-.5l-.5-.3v-.6l-.2-.3h.3l.1-.3-.1-.2h-.6l-.2-.3.5-.7-.3-.3z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1900.7 631.1l-.3-.1.1-.4z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1898.4 628.7l-.2.2-.1-.4.2-.2z"
            className="New Caledonia"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1933 505.3h-.2l-.1-.3h.3z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1926.8 576.2l.3.2-.1.4h.3v.2h-.8l-.3-.5.2-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1888.5 575.6h.2l1 .8.5.3.9.7-.1.3h-.2l-.2.2-.2-.3h-.1l-.2-.2-.1-.4-.4-.1v-.3l-.3-.1-.1.1h-.2l-.9-.4-.2-.4.3-.4z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1925.4 574.1l-.2.3-.3-.2v-.2l.3-.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1923.1 570.2l.1.1h.3l-.1.4-.5.2h-.3l-.4.1-.4.6-.1-.3-.3.1-.2-.2v-.3l.5-.1v-.2l.3-.4.7.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1896.8 567.4l.3-.1.6.3.5.5.3.3h.2l.2.2h.2l.3.3.3-.1.4.1.2.2h.4l.3-.1.2.3.2.8.3.3v.5l-.2.2.1.3-.4-.2-.3.2-.3-.1-.5-.3h-.2l-.6-.2-.4-.1-.2-.3-.3-.2-.3-.1-.2-.3-.4-.2.2-.4-.1-.4v-.4l-.2-.1-.6-.2-.3.1-.1-.2.1-.3.1-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1900.8 564l-.1.2v.7l-.2-.2v-.5z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1897.9 562.2l.3.9.2.4v.4l.1.5-.2.3-.4-.7-.1.3-.3-.5.1-1 .1-.2v-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1889.5 562.4h.3l.3-.1.4.1.1-.1h1.3l.2.3.3.1.2.3h.2l.2.1.4.4v.6h.2l.4.2.1.3v.6l-.1.1-.7.2-.2.1-.4-.1-.4-.2h-.4l-.1-.2-.5-.3h-.6l-.5.1h-.5l-.5-.1-.3-.2-.3.1-.3-.4-.3-.2-.3-.8-.2-.4.2-.2-.1-.2v-.7l.1-.3.6-.3.4.2.4.5.1.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1891.8 560l.5.5-.3.3-.3-.2v-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1891.8 560l-.2.4h-.1l-.4-.3-.3.1-.2-.1-.1-.2.3-.1.2-.2.5.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1885.2 559.5l.1.2.2.1-.2.4-.4.2-.3-.4z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1876.7 557.7l.2.3-.1.3-.8-.4.5-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1880.1 558.5l-.3-.2.1-.3.3-.3v.5l.1.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1879.2 556.7l.2-.1h.4v.2l-.4.3.2.2v.3l-.4.4-.2.1-.3-.1-.4-.4.1-.6.3-.1.2-.4.3-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1875.6 556.8l-.2.1-.2.5.4.5-.5-.2v-.2l-.1-.3-.4-.4v-.2l.4-.2.1-.3.4-.3.3.2v.4z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1888.5 556.3l.2.2-.1.2-.2-.1-.6-.5.2-.4.3-.1.2.2-.1.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1895 555.5l.4.8.6.8v.3l-.4.2v.8l.1.2h.2l.2.3.5.4.1.5.1.3.2.2-.2.2.3.3-.1.1.1.5-.2.2.3.3.1.5.2.5v.6l-.1.1-.3-.3-.3-.5v-.3l-.3-.4-.4-.3-.3-.3-.5-.6-.4-.3-.3-.9-.2-1-.2-.7v-.5l-.1-.4.4-.4-.1-.3-.5-.7-.1-.3.1-.1.4.1.2.1.3-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1874.3 555.2l-.2-.4-.3-.3h.4z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1874.2 554.2l.4.1.1.1.1.5h-.2l-.2-.4z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1877.3 554.4l-.1.3h.7l.4.7v.2l.2.3.1.5-.2.2v.3l-.6-.2-.2-.2h-.3l-.4-.3-.1-.2-.1-.3.4.1-.3-.8-.1-.2-.5.1-.2.1h-.4l-.3.4-.4-.2v-.6l.2-.2h.4v-.4l.4-.6.4-.3.3-.2.4.3.2.4-.1.7z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1871.4 554.4h-.1l-.2-.8.1-.3v-.4l.2.1.1.4v.7z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1874.8 553.9l-.3.2-.1-.1h-.4l-.3-.3-.1-.3-.1-.3.1-.3.3-.4.5-.2.2.2.3.5v.6z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1871.8 550.4l.4.5v.1l.7.4-.1.3-.6.7v.3l-.3.1v-.4h-.2v-.4l-.2-.4-.3-.2-.1-.3.1-.3.2-.2.2-.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1882.1 550.5l.3.2-.2.1-.5.1-.1-.3.2-.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1883 550.5l.2-.1.5.3.3.1.2.2.3.5.3.1.3.3v.3l.5.1v.3l.3.1.3-.1.1.1.4.2.1.2.3-.1.3.1.1.3.4.3.3.3.4.3 1 1-.3.4.3.5.1.6-.3-.1-.3-.4-.7-.8-.4-.1-.5-.4-.6-.1-.1-.3-.6-.2-.5-.5h-.2l-.8-.6-.5-.3v-.2l-.4-.2-.2-.2-.2-.4-.4-.3-.1-.2v-.4l-.4-.5-.2-.1v-.3z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1881.5 549.9l.2.2.2-.1.3.2-.1.2-.3-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1877 549.3h.5l-.2.2-.3-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1881.3 549.3l-.2.5-.1-.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1878.6 549.7l-.5.1-.2-.2.3-.4.3.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1866.1 548.8l.2.3-.2.2-.3-.1-.1-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1867.6 546.9l.3.2-.1.3-.7.2-.3-.3.3-.6.2-.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1869.3 546v.5l-.2-.2v-.2z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1872.2 544.5l.3.1.4.5.3.2.3.1.3.3.8.4.4.5v.4l.1.6.2.2.3.3h.2l.1.4.7.3.4-.1.1.1v.3l-.3.1-.2.3-.5-.2-.8-.4h-.5l-.3-.4-.7-.4-.6-1-.6-1-.5-.3-.7-.7v-.7l.3-.2.3.1z"
            className="Solomon Islands"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1998.9 556.6v-.2h.1v.1z"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1931.8 631.8l-.5-.2.2-.4.5-.1.2.4-.1.2z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1930.6 628h-.2l-.3-.1-.4-.5-.1-.4v-.4l.2-.2.1-.4.3-.1h.4l-.2.3v.5l.7.5-.3.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1930.6 622.1h.3l.1.2-.5.1.1.3.4.2.1.3-.1.4-.4.1-.4-.3h-.4l-.2-.2-.3-.2.1-.4v-.3l.2-.5.3-.4h.5l.2.1-.1.4z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1927.6 614.5l.6-.1.1.1.2.6.2.3.1.1-.4.6-.8.2-.3-.3-.1-.5-.3-.1-.4.3-.1-.1.2-.4.4-.3.4-.5z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1929.9 610.6l-.1-.3h.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1928.3 608.2l.1.5v.2l.4.1.2.5h.5v.4l-.1.1-.3-.3-.3-.1-.6.2-.3-.1-.1-.2-.1-.4.2-.5.2-.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1929.2 608h-.1l-.1-.3h.2z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1929.4 606.6l-.2.2h-.6l-.3.1-.2-.2-.4-.1-.5-.4.1-.2.5-.2.4-.1.4-.3.1-.3h.2l.1.3v.6l.5.4z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1924.7 605.3l.2.3.6.4.7.7.1.1v.4l.2.3-.3.2-.4.4v-.2l-.3-.1h-.4l-.2.1v.2l-.4.2-.3-.1v-.7l-.1-.6.1-.6.1-.5-.2-.5-.6.3-.2-.2-.1-.3v-.3l.3-.3v-.4l.1-.3.3-.1.6.3-.1.2.2.5-.1.2z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1924.1 602.9h-.3l-.5-.3v-.1l.2-.3.2-.1.5.1-.1.4z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1923.6 601.9l.4-.3.1.1.1.3h-.5z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1929.3 604.5l-.2-.1.1-1.2-.1-.3.1-.5.3-.8.1-.5.2.6-.1.3v1.6l-.1.6z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1928 601.2h-.7l-.3-.1v-.2l.9-.7.5-.2.5-.1v.2l-.3.4-.2.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1929.9 600.5v.2h-.3l.1-.3.2-1.3v-.1l.1-1.2.2.1-.1 1.3.1.3-.1.5z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1923.6 601.9l-.9-.1-.6.3-.1.2h-.2l-.1-.6-.2-.1-.4-1 .4-.8v-.4l-.1-.2v-1.4l-.1-.3v-.5l.2-.3v-.3l.2-.3v-.2l.3-.1.1.5.2.4.2.3.1 1.3-.1.8v.1l.6-.1.3-.3.2-.8v-.2l.3-.2.3.1-.1.4v.9l.3.1v.5l-.2.1.3.4-.2.2v.5l.2.5-.1.2h-.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1927.8 592.6l.4.3-.1.4-.3.3-.2.2h-.6v-.4l.1-.4.2-.3z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1928.4 590.7l-.3.2-.2.1v.2l-.2.1v-.3l-.2-.2-.1-.3.1-.4.2-.1.4-.2.1.2.1.4v.1z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1923.4 586.5l-.1-.1.1-.5.2.2z"
            className="Vanuatu"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1989.1 624.9l-.3.1.1-.4z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1981.6 623.3l.2.2.3.1v.3l-.5.2-.5-.3-.5.3h-.3l-.2.3.1.3-.4-.1-.1.2-.4-.1-.1.1-.4-.2.3-.1.2-.1.2-.2.4.1.3-.3.2-.3.5-.1.5-.3z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1982.5 623.2l-.2.1-.2-.1.2-.2z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1988.4 617.1l.1.5-.2.6-.1-.2-.1-.4h-.2l.1-.5.2-.1z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1985.8 615.7h-.1l-.1-.4.2-.2.4-.1v.4l-.2.2z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1983.6 613.2l-.1.4.3.2.1.3.3.4.3.1.1.3h.2l.1.4-.3.5.1.2.1.5-.3.2v.5h.2l.1.5-.3.3-.6.2-.1-.2-.3.1-.1.2-.3-.3-.8.3-.8.7-.3-.1-.4.2-.3-.1-.6.1-.3-.2-.9-.3-.3-.1-.6-.1-.2-.1-.5-.2-.2-1 .3-.7h.3l.3-.1.1-.5.3-.1.1-.4-.2-.2.6-.4.4-.5.1.1.6-.5h.2l.9-.4.6.2.3-.1.5-.2.6-.1.3-.3z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1989.9 613.4l-.2.1.2-.9h.4l-.1.4z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1978.5 611.4l-.2.3-.5.3v-.3l.4-.4z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1993.4 611l-.2-.2.1-.2.5-.5.3-.5-.3 1.1z"
            className="Fiji"
          ></path>
          <path
            fill={countryColor}
            fillOpacity={countryOpacity.toString()}
            stroke={outlineColor}
            strokeDasharray="none"
            strokeOpacity={outlineOpacity.toString()}
            strokeWidth="1.572"
            d="M1994.4 606l-.4.4-.8 1.1-.3.1-.7.4-.2.6-.4.2-.2.3-.1.2.3.1.6-.3.1-.1.3-.3.2-.3.6-.3.3-.3.6-.3v.3l-.5.7-.2.1.1.6-.3.3-.3-.3h-.4l-.5.1-.4.3-.7.1h-1l.5-.5-.4-.2-.6.2-.4.2v.2l-.3.1-.2.1-.1.4-.2.3-.3-.1v-.2l-.4-.1-.4.2-.2.5-.3.2h-.3v-.7l-.2-.4.1-.2-.1-.1-.6.2v-.4l.4-.3h.1l-.1-.5.3-.1.5.3.6-.4h.2l.3-.3h.2l.3-.3v-.2l.8-.1.9-.3.3-.1.4.1.5-.2.2-.4h.2l.2-.4.4.1.1-.2.2.1 1-.5.1.3.2-.1.2.1.3-.3.5-.2.1.1-.5.4z"
            className="Fiji"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default OceaniaRegionMap;
