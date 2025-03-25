import { useContext, useEffect, useMemo, useState } from "react";
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

  const holidays = useMemo(() => {
    // Use set to check holidays for better performance
    const holidays = new Set<string>([]);

    // Add all holiday events
    events.forEach((event) => {
      if (event.is_holiday) {
        holidays.add(`${event.jalali_year}-${event.jalali_month}-${event.jalali_day}`);
      }
    });

    return holidays;
  }, [events]);

  return (
    <EventsContext.Provider value={{ events, holidays }}>
      {children}
    </EventsContext.Provider>
  );
}
