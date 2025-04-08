import { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  form?: boolean;
  onSubmit?: (data: object) => void | Promise<void>;
};
