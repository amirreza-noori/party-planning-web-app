import { useTranslation } from "react-i18next";

import { Header } from "@/components";
import { MainLayout } from "@/layouts";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <MainLayout header={<Header title={t("page.not.found")} />}>
      <div className="flex h-[70vh] w-full items-center justify-center">
        {t("page.not.found")}
      </div>
    </MainLayout>
  );
}
