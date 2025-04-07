import { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
} & (
  | { form?: false; onSubmit: undefined }
  | { form: true; onSubmit?: (data: object) => void | Promise<void> }
);
