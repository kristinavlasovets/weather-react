export interface ISecondForecast {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    cloud: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          avgtemp_c: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          hour: [
            {
              time: string;
              temp_c: number;
              is_day: number;
              condition: {
                text: string;
                icon: string;
                code: number;
              };
            },
          ];
        };
      },
    ];
  };
}
