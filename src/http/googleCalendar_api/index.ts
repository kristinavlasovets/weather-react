import ApiCalendar from "react-google-calendar-api";
import { googleConfig } from "../../shared/sharedUrls";

const config = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
  apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY!,
  scope: googleConfig.scope,
  discoveryDocs: [googleConfig.discoveryDocs],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
