export interface IForecast {
  city: {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
  list: [
    {
      dt_txt: string;
      main: {
        feels_like: number;
        humidity: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [{ main: string; icon: string; description: string }];
    },
  ];
}
