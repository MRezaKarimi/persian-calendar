import { useContext, useEffect, useState } from "react";
import { EventsContext, type Event } from "../contexts/EventsContext";
import { DateContext } from "../contexts/DateContext";

// Cache to store fetched events data
const eventsCache: Record<string, Event[]> = {};

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const { month, year } = useContext(DateContext);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const cacheKey = `${year}-${month}`;

      // Check if data exists in cache
      if (eventsCache[cacheKey]) {
        setEvents(eventsCache[cacheKey]);
        return;
      }

      try {
        const data = await fetch(`/events/${year}/${month}.json`).then((res) =>
          res.json()
        );
        // Store in cache
        eventsCache[cacheKey] = data;
        setEvents(data);
      } catch (e) {
        console.warn(`file not found events/${year}/${month}.json`);
        eventsCache[cacheKey] = [];
        setEvents([]);
      }
    }
    fetchEvents();
  }, [month, year]);

  return <EventsContext.Provider value={{ events }}>{children}</EventsContext.Provider>;
}
