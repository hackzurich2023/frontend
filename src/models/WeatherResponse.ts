import { z } from "zod";

export const WeatherResponse = z.object({
  weather: z
    .object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
    .array(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
  visibility: z.number(),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
  }),
  clouds: z.object({
    all: z.number(),
  }),
  rain: z
    .object({
      "1h": z.number().optional(),
      "3h": z.number().optional(),
    })
    .optional(),
  snow: z
    .object({
      "1h": z.number().optional(),
      "3h": z.number().optional(),
    })
    .optional(),
  sys: z.object({
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
});

export type WeatherResponse = z.infer<typeof WeatherResponse>;
