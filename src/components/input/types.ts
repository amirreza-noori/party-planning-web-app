import { ReactNode } from "react";

export type InputProps = {
  name: string;
  type: "text" | "date" | "time" | "number";
  label: string;
  placeholder?: string;
  adornment?: ReactNode;
  defaultValue?: string | number;
};
