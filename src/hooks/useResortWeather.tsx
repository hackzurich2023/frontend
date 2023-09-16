import { useMemo } from "react";

import { useQuery } from "react-query";

import { ResortName, RESORTS } from "data/resorts";
import { WeatherResponse } from "models/WeatherResponse";
import { OPEN_WEATHER_API_KEY } from "utils/constants";
import { QueryFn } from "utils/types";

function buildGetResortWeatherQuery(
  resortName: ResortName
): QueryFn<WeatherResponse> {
  const resort = RESORTS[resortName];
  const [latitude, longitude] = resort.position;
  return async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    return WeatherResponse.parse(data);
  };
}

export function useResortWeather(resortName: ResortName) {
  const getWeatherQuery = useMemo(
    () => buildGetResortWeatherQuery(resortName),
    [resortName]
  );

  const { data } = useQuery(
    `resort-weather-query-${resortName}`,
    getWeatherQuery
  );
  return data;
}
