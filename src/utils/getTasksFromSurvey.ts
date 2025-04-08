import { surveyAlcohol } from "@/constants/surveys/alcohol";
import { surveyDecorator } from "@/constants/surveys/decorator";
import { surveyEInvite } from "@/constants/surveys/eInvite";
import { surveyFood } from "@/constants/surveys/food";
import { surveyGame } from "@/constants/surveys/game";
import { Party, Survey, Task } from "@/types";

export const getTasksFromSurvey = (
  draft: Partial<Party>,
  currentTasks?: Task[]
) => {
  const newTasks = currentTasks ? [...currentTasks] : [];

  const addToTask = (survey: Survey, answer: number | undefined) => {
    const answerIndex = Number(answer);
    if (answerIndex >= 0 && survey.answers[answerIndex]) {
      newTasks.push(...survey.answers[answerIndex].tasks);
    }
  };
  addToTask(surveyEInvite, draft.surveyEInvite);
  addToTask(surveyFood, draft.surveyFood);
  addToTask(surveyAlcohol, draft.surveyAlcohol);
  addToTask(surveyDecorator, draft.surveyDecorator);
  addToTask(surveyGame, draft.surveyGame);

  return newTasks;
};
