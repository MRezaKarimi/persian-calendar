import Calendar from "./components/calendar/Calendar";
import { DateProvider } from "./providers/DateProvider";
import { EventsProvider } from "./providers/EventsProvider";

function App() {
  return (
    <div className="flex w-fit h-96">
      <DateProvider>
        <EventsProvider>
          <Calendar />
        </EventsProvider>
      </DateProvider>
    </div>
  );
}

export default App;
