import { Party } from "@/types";

export type PreviousPartiesProps = {
  parties: Party[];
  onClick: (id: number) => void;
};
