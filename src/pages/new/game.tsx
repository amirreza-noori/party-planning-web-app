import imageUrl from "@/assets/images/sable-shooting.svg";
import { surveyGame } from "@/constants/surveys/game";
import { NewPartySurveyLayout } from "@/layouts";

export default function GamePage() {
  const handleSaveParty = () => {};

  return (
    <NewPartySurveyLayout
      survey={surveyGame}
      storeKey="surveyGame"
      step={7}
      imageUrl={imageUrl}
      onAction={handleSaveParty}
    />
  );
}
