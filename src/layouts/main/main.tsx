import { FormEventHandler, memo } from "react";

import { MainLayoutProps } from "./types";

const MainLayout = memo(
  ({ children, footer, header, form, onSubmit }: MainLayoutProps) => {
    const Component = form ? "form" : "div";

    const handleSubmit: FormEventHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      if (onSubmit) await onSubmit(data);
    };

    return (
      <Component
        className="mx-auto flex min-h-screen max-w-[560px] flex-col px-4 py-6"
        onSubmit={handleSubmit}>
        {!!header && <div className="grid">{header}</div>}
        <div className="grow">{children}</div>
        {!!footer && <div className="grid gap-2">{footer}</div>}
      </Component>
    );
  }
);

MainLayout.displayName = "MainLayout";
export default MainLayout;
