import { ComponentType } from "react";

import {
  AnniversaryIcon,
  BirthDayIcon,
  DinnerIcon,
  MeetUpIcon,
  OtherIcon,
} from "@/assets/icons";
import { ButtonProps } from "@/components/types";

type OccasionButton = { icon: ComponentType; color: ButtonProps["color"] };

export const occasionTypeIcons = [
  { icon: BirthDayIcon, color: "violet" },
  { icon: AnniversaryIcon, color: "red" },
  { icon: DinnerIcon, color: "lime" },
  { icon: MeetUpIcon, color: "blue" },
  { icon: OtherIcon, color: "yellow" },
] satisfies OccasionButton[];

export const occasionSizeIcons = [
  { icon: BirthDayIcon, color: "violet" },
  { icon: AnniversaryIcon, color: "red" },
  { icon: DinnerIcon, color: "lime" },
] satisfies OccasionButton[];
