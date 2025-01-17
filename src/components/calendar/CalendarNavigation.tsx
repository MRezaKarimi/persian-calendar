import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import { ReactNode } from "react";

export default function CalendarNavigation({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between items-center gap-3 w-full mb-2 px-2">
      <ArrowRight01Icon className="cursor-pointer" />
      {children}
      <ArrowLeft01Icon className="cursor-pointer" />
    </div>
  );
}
