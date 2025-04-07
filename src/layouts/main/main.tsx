import { MainLayoutProps } from "./types";

export default function MainLayout({
  children,
  footer,
  header,
}: MainLayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[560px] flex-col px-4 py-6">
      {!!header && <div className="grid">{header}</div>}
      <div className="grow">{children}</div>
      {!!footer && <div className="grid gap-2">{footer}</div>}
    </div>
  );
}
