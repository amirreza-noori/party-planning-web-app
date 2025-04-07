import imageUrl from "@/assets/images/balloons.svg";
import { surveyDecorator } from "@/constants/surveys/decorator";
import { NewPartySurveyLayout } from "@/layouts";

export default function DecoratorPage() {
  return (
    <NewPartySurveyLayout
      survey={surveyDecorator}
      storeKey="surveyDecorator"
      step={6}
      imageUrl={imageUrl}
    />
  );
}
