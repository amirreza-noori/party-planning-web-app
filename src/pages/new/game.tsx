import { useNavigate } from "react-router";

import imageUrl from "@/assets/images/sable-shooting.svg";
import { surveyGame } from "@/constants/surveys/game";
import { usePartyDraft } from "@/hooks";
import { NewPartySurveyLayout } from "@/layouts";
import { routes } from "@/routes";
import { add } from "@/store/slices/parties";
import { useAppDispatch } from "@/store/store";
import { getTasksFromSurvey } from "@/utils/getTasksFromSurvey";

export default function GamePage() {
  const navigate = useNavigate();
  const { draft } = usePartyDraft(7);
  const dispatch = useAppDispatch();

  const handleSaveParty = () => {
    dispatch(
      add({
        name: draft.name!,
        type: draft.type!,
        size: draft.size!,
        budget: draft.budget!,
        timeStamp: draft.timeStamp!,
        surveyEInvite: draft.surveyEInvite!,
        surveyFood: draft.surveyFood!,
        surveyAlcohol: draft.surveyAlcohol!,
        surveyDecorator: draft.surveyDecorator!,
        surveyGame: draft.surveyGame!,
        tasks: getTasksFromSurvey(draft),
      })
    );
    navigate(routes.home);
  };

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
