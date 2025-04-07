import { Party, Survey } from "@/types";

export type NewPartySurveyLayoutProps = {
  storeKey: keyof Party;
  step: number;
  survey: Survey;
  actionTitle?: string;
  imageUrl?: string;
  onAction?: (data: object) => void | Promise<void>;
};
