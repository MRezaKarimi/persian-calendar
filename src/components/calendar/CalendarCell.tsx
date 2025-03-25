import { classNames } from "../../lib/class-names";

interface CalendarCellProps {
  day: number | string;
  isGray: boolean;
  active: boolean;
  holiday: boolean;
}

export default function CalendarCell({
  day,
  active,
  holiday,
  isGray,
}: CalendarCellProps) {
  return (
    <div
      className={classNames(
        "size-9 p-2 text-center rounded-full font-medium text-base text-gray-600",
        {
          "text-sky-800 bg-sky-100 ring-1": active,
          "opacity-40": isGray,
          "text-red-600": holiday,
          "!text-red-600 bg-red-50 ring-1 ring-red-600": holiday && active,
        }
      )}
    >
      {day}
    </div>
  );
}
