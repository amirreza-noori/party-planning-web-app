import { useTranslation } from "react-i18next";

import { UpcomingPartyCardProps } from "./types";
import notepadUrl from "@/assets/images/notepad.png";

export default function UpcomingPartyCard({
  party,
  onAction,
}: UpcomingPartyCardProps) {
  const { t } = useTranslation();
  const daysRemained = Math.ceil(
    (party.timeStamp - new Date().getTime()) / 3600 / 1000 / 24
  );

  const doneCount = party.tasks.reduce(
    (count, task) => (task.done ? count + 1 : count),
    0
  );

  const todoCount = party.tasks.length - doneCount;

  const remainsText =
    daysRemained > 0 ? `${daysRemained} ${t("remain.days")}` : t("today");

  return (
    <div
      onClick={onAction}
      className="relative grid min-h-32 w-full cursor-pointer justify-start rounded-md bg-amber-300 bg-linear-to-br from-[#50586A] to-[#1E2530] py-4 ps-5 pe-36">
      <img
        className="absolute top-1/2 right-8 -translate-y-1/2"
        src={notepadUrl}
      />
      <div className="grid gap-2">
        <h2 className="!m-0 !p-0">{party.name}</h2>
        <span className="mb-4">{remainsText}</span>
      </div>
      <div className="flex gap-16">
        <div className="grid gap-2">
          <h2 className="!m-0 !p-0">{doneCount}</h2>
          <span className="mb-4">{t("done")}</span>
        </div>
        <div className="grid gap-2">
          <h2 className="!m-0 !p-0">{todoCount}</h2>
          <span className="mb-4">{t("todo")}</span>
        </div>
      </div>
    </div>
  );
}
