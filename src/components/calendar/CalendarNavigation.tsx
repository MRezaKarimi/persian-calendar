import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import { DateContext } from "../../contexts/DateContext";
import { useContext, ReactNode } from "react";

export default function CalendarNavigation({ children }: { children: ReactNode }) {
  const dateContext = useContext(DateContext);

  return (
    <div className="flex justify-between items-center gap-3 w-full mb-2 px-2 select-none">
      <ArrowRight01Icon
        className="cursor-pointer"
        onClick={() => dateContext.previousMonth()}
      />
      {children}
      <ArrowLeft01Icon
        className="cursor-pointer"
        onClick={() => dateContext.nextMonth()}
      />
    </div>
  );
}
