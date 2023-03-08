import { IForecast } from "../../models/IForecast";

export interface LocationProps {
  onLocationChange: () => void;
  locationData: IForecast;
}
