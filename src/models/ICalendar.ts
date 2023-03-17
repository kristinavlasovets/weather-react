export interface ICalendar {
  created: string;
  creator: {
    email: string;
  };
  start: {
    dateTime: string;
  };
  summary: string;
}
