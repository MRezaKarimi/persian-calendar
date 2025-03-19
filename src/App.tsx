import Calendar from "./components/calendar/Calendar";
import EventList from "./components/events/EventList";
import { DateProvider } from "./providers/DateProvider";
import { EventsProvider } from "./providers/EventsProvider";

function App() {
  return (
    <div className="flex w-fit h-96">
      <DateProvider>
        <EventsProvider>
          <Calendar />
          <EventList />
        </EventsProvider>
      </DateProvider>
    </div>
  );
}

export default App;
