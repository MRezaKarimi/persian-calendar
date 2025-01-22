import Calendar from "./components/calendar/Calendar";
import { DateProvider } from "./components/DateProvider";

function App() {
  return (
    <div className="flex w-fit">
      <DateProvider>
        <Calendar />
      </DateProvider>
    </div>
  );
}

export default App;
