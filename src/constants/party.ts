import { ComponentType } from "react";

import {
  AnniversaryIcon,
  BirthDayIcon,
  DinnerIcon,
  MeetUpIcon,
  OtherIcon,
} from "@/assets/icons";
import { ButtonProps } from "@/components/types";

type ButtonIconInfo = { icon: ComponentType; color: ButtonProps["color"] };

export const partyTypeIcons = [
  { icon: BirthDayIcon, color: "violet" },
  { icon: AnniversaryIcon, color: "red" },
  { icon: DinnerIcon, color: "lime" },
  { icon: MeetUpIcon, color: "blue" },
  { icon: OtherIcon, color: "yellow" },
] satisfies ButtonIconInfo[];

export const partySizeIcons = [
  { icon: BirthDayIcon, color: "violet" },
  { icon: AnniversaryIcon, color: "red" },
  { icon: DinnerIcon, color: "lime" },
] satisfies ButtonIconInfo[];
