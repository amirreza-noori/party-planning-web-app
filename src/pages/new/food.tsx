import imageUrl from "@/assets/images/birthday-cake.svg";
import { surveyFood } from "@/constants/surveys/food";
import { NewPartySurveyLayout } from "@/layouts";

export default function FoodPage() {
  return (
    <NewPartySurveyLayout
      survey={surveyFood}
      storeKey="surveyFood"
      step={4}
      imageUrl={imageUrl}
    />
  );
}
