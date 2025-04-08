import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import { CheckCard, Header } from "@/components";
import { MainLayout } from "@/layouts";
import { toggleDoneById } from "@/store/slices/parties";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getRemainedDays } from "@/utils";

export default function PartyPage() {
  const { t } = useTranslation();
  const params = useParams();
  const id = Number(params.id);
  const party = useAppSelector((store) =>
    store.parties.list.find((party) => party.id === id)
  );
  const dispatch = useAppDispatch();

  if (!party) {
    return <>Notfound</>;
  }

  const daysRemained = getRemainedDays(party.timeStamp);

  const doneCount = party.tasks.reduce(
    (count, task) => (task.done ? count + 1 : count),
    0
  );

  const todoCount = party.tasks.length - doneCount;

  const remainsText =
    daysRemained > 0 ? `${daysRemained} ${t("remain.days")}` : t("today");

  return (
    <MainLayout
      header={
        <>
          <Header title={t("checklist")} backButton />
        </>
      }>
      <div className="flex flex-wrap gap-x-12">
        <div className="grid gap-2">
          <h2 className="!m-0 !p-0">{party.name}</h2>
          <span className="mb-4">{remainsText}</span>
        </div>
        <div className="flex gap-x-12">
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

      <hr />

      <div className="my-4 grid gap-4">
        {party.tasks.map(({ title, description, done }, index) => (
          <CheckCard
            title={t(title)}
            description={description ? t(description) : undefined}
            checked={done}
            onClick={() =>
              dispatch(toggleDoneById({ partyId: party.id, taskIndex: index }))
            }
          />
        ))}
      </div>
    </MainLayout>
  );
}
