'use client';

import { countryLocations } from '@/data/country-locations';
import { mapConfigs } from '@/data/map-configs';
import { markersData } from '@/data/markers-data';
import { Countries } from '@/models/countries';
import { Regions } from '@/models/regions';
import { Tooltip, useTheme } from '@mui/material';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

interface QuizMapProps {
  region: Regions;
  width: number;
  height: number;
  activeCountries: string[];
  currentAnswers?: string[];
  clickedCountries: string[];
  onCountryClick: (country: Countries) => void;
  onCountryHover?: (country: Countries | null) => void;
  tooltipContent?: Partial<Record<Countries, JSX.Element>>;
}

export default function QuizMap(props: QuizMapProps) {
  const theme = useTheme();
  const {
    region,
    width,
    height,
    activeCountries,
    currentAnswers = activeCountries,
    clickedCountries,
    onCountryClick,
    onCountryHover,
    tooltipContent,
  } = props;

  const getFill = (countryName: string) => {
    if (!activeCountries.includes(countryName)) {
      return '#d6d6da';
    }
    if (!clickedCountries.includes(countryName)) {
      return '#9998A3';
    }

    if (currentAnswers.includes(countryName)) {
      return theme.palette['sgbus-green-6'].main;
    } else {
      return theme.palette['indian-red-6'].main;
    }
  };

  const isIncludedNotClicked = (countryName: string) =>
    activeCountries.includes(countryName) && !clickedCountries.includes(countryName);

  const isIncludedClickedAndWrong = (countryName: string) =>
    activeCountries.includes(countryName) &&
    clickedCountries.includes(countryName) &&
    !currentAnswers.includes(countryName);

  const countryClicked = (countryName: Countries) => {
    onCountryClick(countryName);
  };

  const getMapSize = () => {
    if (height > 1200) {
      return mapConfigs[region][1200].projectionConfig;
    }
    if (height > 1050) {
      return mapConfigs[region][1050].projectionConfig;
    }
    if (height > 900) {
      return mapConfigs[region][900].projectionConfig;
    }
    if (height > 750) {
      return mapConfigs[region][750].projectionConfig;
    }

    return mapConfigs[region][600].projectionConfig;
  };

  return (
    <ComposableMap
      width={width}
      height={height}
      projection="geoAzimuthalEqualArea"
      projectionConfig={getMapSize()}
    >
      {/* <ZoomableGroup
        translateExtent={[
          [0, 0],
          [2000, 1250],
        ]}
      > */}
      <Geographies key={'test'} geography={'/topojson/ne_10m_admin_0_countries.geojson'}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={getFill(geo.properties.NAME)}
              stroke={activeCountries.includes(geo.properties.NAME) ? '#EAEAEC' : '#EAEAEC'}
              onMouseEnter={() =>
                isIncludedClickedAndWrong(geo.properties.NAME) &&
                onCountryHover &&
                onCountryHover(geo.properties.NAME)
              }
              onMouseLeave={(e) => {
                if (e.relatedTarget && (e.relatedTarget as HTMLElement).role == 'tooltip') {
                  return;
                }
                return onCountryHover && onCountryHover(null);
              }}
              style={{
                default: { outline: 'none' },
                hover: {
                  outline: 'none',
                  opacity: isIncludedNotClicked(geo.properties.NAME) ? 0.7 : 1,
                  cursor: isIncludedNotClicked(geo.properties.NAME) ? 'pointer' : 'default',
                },
                pressed: { outline: 'none' },
              }}
              onClick={() => countryClicked(geo.properties.NAME)}
            />
          ))
        }
      </Geographies>
      {markersData[region].map((countryName) => (
        // <Tooltip
        //   key={marker.name}
        //   title={tooltipContent?.[marker.name]}
        //   open={tooltipContent?.[marker.name] !== undefined}
        //   placement="top"
        //   followCursor={!tooltipOnClick}
        //   arrow
        // >
        <Marker
          key={countryName}
          coordinates={countryLocations[countryName]}
          onMouseEnter={() =>
            isIncludedClickedAndWrong(countryName) && onCountryHover && onCountryHover(countryName)
          }
          onMouseLeave={() => onCountryHover && onCountryHover(null)}
          style={{
            hover: {
              opacity: isIncludedNotClicked(countryName) ? 0.7 : 1,
              cursor: isIncludedNotClicked(countryName) ? 'pointer' : 'default',
            },
          }}
          onClick={() => countryClicked(countryName)}
        >
          <circle r={14} fill={getFill(countryName)} stroke="#EAEAEC" strokeWidth={2} />
        </Marker>
        // </Tooltip>
      ))}
      {tooltipContent &&
        (Object.keys(tooltipContent) as Countries[]).map((country) =>
          tooltipContent[country] ? (
            <Tooltip
              key={country}
              title={tooltipContent?.[country]}
              open={tooltipContent?.[country] !== undefined}
              placement="top"
              arrow
            >
              <Marker coordinates={countryLocations[country]} />
            </Tooltip>
          ) : null
        )}
      {/* </ZoomableGroup> */}
    </ComposableMap>
  );
}
