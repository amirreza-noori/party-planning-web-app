import { ReactNode } from "react";

export type NewPartyLayoutProps = {
  title?: string;
  step: number;
  children: ReactNode;
  actionTitle?: string;
  actionDisabled?: boolean;
  onAction?: (data: object) => void | Promise<void>;
};
