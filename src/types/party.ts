import { Task } from "./task";

export enum PartyOccasion {
  birthday,
  anniversary,
  dinner,
  meetUp,
  other,
}
export enum PartySize {
  small,
  medium,
  large,
}

export type Party = {
  id: number;
  type: PartyOccasion;
  size: PartySize;
  name: string;
  timeStamp: number;
  budget: number;
  surveyEInvite: number;
  surveyFood: number;
  surveyAlcohol: number;
  surveyDecorator: number;
  surveyGame: number;
  tasks: Task[];
};
