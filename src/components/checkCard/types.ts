import { ReactNode } from "react";

export type CheckCardProps = {
  title: string;
  description?: ReactNode;
  onClick?: VoidFunction;
  checked?: boolean;
};
