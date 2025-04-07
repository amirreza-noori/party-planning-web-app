import { ReactNode } from "react";

export type ButtonProps = {
  title: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  description?: string;
  align?: "start" | "end" | "center";
  color?: "violet" | "red" | "lime" | "blue" | "yellow";
  selected?: boolean;
  disabled?: boolean;
  onClick?: VoidFunction;
  type?: "button" | "submit" | "reset";
};
