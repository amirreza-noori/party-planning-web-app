import { useTranslation } from "react-i18next";

import MainLayout from "../main/main";
import { NewPartyLayoutProps } from "./types";
import { Button, Header, Progress } from "@/components";

export default function NewPartyLayout({
  children,
  actionDisabled,
  actionTitle,
  onAction,
  title,
  step,
}: NewPartyLayoutProps) {
  const { t } = useTranslation();
  return (
    <MainLayout
      header={
        <>
          <Header title={title ? title : t("create.new.event")} backButton />
          <Progress value={step + 1} max={6} />
        </>
      }
      footer={
        <Button
          title={actionTitle ? actionTitle : t("next")}
          disabled={actionDisabled}
          onClick={onAction}
        />
      }>
      {children}
    </MainLayout>
  );
}
