import {
  AnniversaryIcon,
  BirthDayIcon,
  BudgetIcon,
  CalendarIcon,
  ClockIcon,
  DinnerIcon,
  MeetUpIcon,
  OtherIcon,
  PopulationBigIcon,
  PopulationMediumIcon,
  PopulationSmallIcon,
} from "@/assets/icons";

function App() {
  return (
    <div className="flex gap-5 p-5">
      <BirthDayIcon />
      <AnniversaryIcon />
      <DinnerIcon />
      <MeetUpIcon />
      <OtherIcon />
      <PopulationBigIcon />
      <PopulationMediumIcon />
      <PopulationSmallIcon />
      <BudgetIcon />
      <CalendarIcon />
      <ClockIcon />
    </div>
  );
}

export default App;
