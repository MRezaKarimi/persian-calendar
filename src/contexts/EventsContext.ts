import { createContext } from "react";

export type Event = {
  id: number;
  title: string;
  base: number;
  gregorian_year: number;
  gregorian_month: number;
  gregorian_day: number;
  gregorian_day_title: string;
  jalali_year: number;
  jalali_month: number;
  jalali_day: number;
  jalali_day_title: string;
  hijri_year: number;
  hijri_month: number;
  hijri_day: number;
  hijri_day_title: string;
  is_holiday: boolean;
  date_string: string;
  object_name: string;
};

export const EventsContext = createContext<{ events: Event[] }>({
  events: [],
});
