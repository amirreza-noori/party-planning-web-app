import imageUrl from "@/assets/images/juice-glasses.svg";
import { surveyAlcohol } from "@/constants/surveys/alcohol";
import { NewPartySurveyLayout } from "@/layouts";

export default function AlcoholPage() {
  return (
    <NewPartySurveyLayout
      survey={surveyAlcohol}
      storeKey="surveyAlcohol"
      step={5}
      imageUrl={imageUrl}
    />
  );
}
