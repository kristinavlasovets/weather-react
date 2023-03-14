export interface IHourlyForecast {
  hours: [
    {
      time: string;
      airTemperature: {
        noaa: number;
      };
      cloudCover: {
        noaa: number;
      };
      humidity: {
        noaa: number;
      };
      windSpeed: {
        noaa: number;
      };
    },
  ];
  meta: {
    dailyQuota: number;
    lat: number;
    lng: number;
    requestCount: number;
  };
}
