export interface ICalendar {
  created: string;
  id: string;
  creator: {
    email: string;
  };
  start: {
    dateTime: string;
  };
  summary: string;
}
