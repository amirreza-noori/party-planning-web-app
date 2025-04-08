import { useTranslation } from "react-i18next";

import { PreviousPartiesProps } from "./types";
import { Button } from "@/components";
import { partyTypeIcons } from "@/constants";
import { getFormattedDateTime } from "@/utils";

export default function PreviousParties({
  parties,
  onClick,
}: PreviousPartiesProps) {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("previous.parties")}</h2>

      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        {parties.map(({ id, name, type, timeStamp }) => {
          const Icon = partyTypeIcons[type].icon;
          const { time, date } = getFormattedDateTime(timeStamp);
          return (
            <Button
              key={id}
              variant="secondary"
              align="start"
              title={name}
              icon={<Icon />}
              color={partyTypeIcons[type].color}
              description={
                <span className="grid text-start">
                  <span>{date}</span>
                  <span>{time}</span>
                </span>
              }
              onClick={() => onClick(id)}
            />
          );
        })}
      </div>
    </>
  );
}
