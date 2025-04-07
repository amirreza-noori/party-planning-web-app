import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { BudgetIcon, CalendarIcon, ClockIcon } from "@/assets/icons";
import { Button, Input } from "@/components";
import { partySizeIcons } from "@/constants";
import { usePartyDraft } from "@/hooks";
import { NewPartyLayout } from "@/layouts";
import { Party, PartySize } from "@/types";

type FormData = {
  name: string;
  time: string;
  date: string;
  budget: string;
};

export default function DataPage() {
  const { t } = useTranslation();
  const { handleNext, setDraft, draft } = usePartyDraft(2);

  const { name, budget } = draft;
  const timeObject = new Date(draft.timeStamp ?? "");
  const zPad = (num: number) => num.toString().padStart(2, "0");
  const time = `${zPad(timeObject.getHours())}:${zPad(timeObject.getMinutes())}`;
  const date = `${timeObject.getFullYear()}-${zPad(timeObject.getMonth())}-${zPad(timeObject.getDate())}`;

  const handleSubmit = (data: object) => {
    const { name, time, date, budget } = data as FormData;
    console.log({ name, time, date, budget });
    if (!name) return alert(t("event.name.error"));
    if (!date) return alert(t("date.error"));
    if (!time) return alert(t("time.error"));
    if (!budget) return alert(t("budget.error"));
    const timeObject = new Date(`${date} ${time}`);
    setDraft({ name, timeStamp: timeObject.getTime(), budget: Number(budget) });
    handleNext();
  };

  return (
    <NewPartyLayout step={2} onAction={handleSubmit}>
      <Input
        name="name"
        type="text"
        label={t("event.name")}
        defaultValue={name}
      />
      <Input
        name="date"
        type="date"
        label={t("date")}
        placeholder={t("date.placeholder")}
        adornment={<CalendarIcon />}
        defaultValue={date}
      />
      <Input
        name="time"
        type="time"
        label={t("time")}
        placeholder={t("time.placeholder")}
        adornment={<ClockIcon />}
        defaultValue={time}
      />
      <Input
        name="budget"
        type="number"
        label={t("budget")}
        adornment={<BudgetIcon />}
        defaultValue={budget}
      />
    </NewPartyLayout>
  );
}
