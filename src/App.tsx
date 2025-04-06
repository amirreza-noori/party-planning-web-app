import {
  AnniversaryIcon,
  BirthDayIcon,
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
    </div>
  );
}

export default App;
