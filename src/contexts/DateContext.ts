import { createContext } from "react";

interface DateContextType {
  month: number;
  year: number;

  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

export const DateContext = createContext<DateContextType>({} as DateContextType);
