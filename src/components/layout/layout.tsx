import { LayoutProps } from "./types";

export default function Layout({ children, footer, header }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col px-4 py-6">
      {!!header && <div className="grid">{header}</div>}
      <div className="grow">{children}</div>
      {!!footer && <div className="grid gap-2">{footer}</div>}
    </div>
  );
}
