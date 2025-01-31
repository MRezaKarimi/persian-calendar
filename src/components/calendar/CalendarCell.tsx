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
      className={`size-9 p-2 text-center rounded-full font-medium text-base text-gray-600 ${
        active && "!text-sky-800 bg-sky-100 ring-1"
      } ${isGray && "opacity-40"} ${holiday && "!text-red-600"}`}
    >
      {day}
    </div>
  );
}
