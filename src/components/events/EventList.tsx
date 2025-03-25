import { useContext } from "react";
import { EventsContext } from "../../contexts/EventsContext";
import EventItem from "./EventItem";

export default function EventList() {
  const { events } = useContext(EventsContext);
  return (
    <div className="flex flex-col p-3 border-s overflow-auto">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
