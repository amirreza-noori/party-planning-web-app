import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import {
  Button,
  Header,
  NoUpcomingPartyCard,
  PreviousParties,
  UpcomingPartyCard,
} from "@/components";
import { MainLayout } from "@/layouts";
import { routes } from "@/routes";
import { useAppSelector } from "@/store/store";

const aDaySeconds = 3600 * 1000 * 24;

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const parties = useAppSelector((store) => store.parties.list);
  const lastDayTimeStamp = new Date().getTime() - aDaySeconds;
  const upcomingParties = parties.filter(
    (party) => party.timeStamp >= lastDayTimeStamp
  );
  const previousParties = parties.filter(
    (party) => party.timeStamp < lastDayTimeStamp
  );

  const handleNewTask = () => navigate(routes.new.occasion);

  return (
    <div>
      <MainLayout header={<Header title="Hi, Ishita 👋" profile />}>
        {upcomingParties.length > 0 ? (
          <div className="grid gap-2">
            <div className="my-2 flex items-end justify-between">
              <h2 className="!m-0 !p-0">{t("upcoming")}</h2>
              <Button
                variant="secondary"
                title={t("create.new")}
                onClick={handleNewTask}
                className="grow-0"
              />
            </div>
            {upcomingParties.map((party) => (
              <UpcomingPartyCard
                party={party}
                onAction={() => navigate(routes.party + party.id)}
              />
            ))}
          </div>
        ) : (
          <NoUpcomingPartyCard onAction={handleNewTask} />
        )}
        {previousParties.length > 0 && (
          <PreviousParties
            parties={previousParties}
            onClick={(id) => navigate(routes.party + id)}
          />
        )}
      </MainLayout>
    </div>
  );
}
