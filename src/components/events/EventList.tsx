import { useContext } from "react";
import { EventsContext } from "../../contexts/EventsContext";
import EventItem from "./EventItem";
import { DateContext } from "../../contexts/DateContext";

export default function EventList() {
  const { events } = useContext(EventsContext);
  const { year } = useContext(DateContext);

  if (events.length === 0) {
    return (
      <div className="text-gray-500 text-sm text-center py-6">{`رویداد های سال ${year} وجود ندارد`}</div>
    );
  }

  return (
    <div className="flex flex-col p-3 border-s overflow-auto">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
