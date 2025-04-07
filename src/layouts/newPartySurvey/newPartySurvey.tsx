import { useTranslation } from "react-i18next";

import NewPartyLayout from "../newParty/newParty";
import { NewPartySurveyLayoutProps } from "./types";
import { Button } from "@/components";
import { usePartyDraft } from "@/hooks";

export default function NewPartySurveyLayout({
  storeKey,
  survey,
  actionTitle,
  onAction,
  imageUrl,
  step,
}: NewPartySurveyLayoutProps) {
  const { t } = useTranslation();
  const { handleNext, setDraft, draft } = usePartyDraft(step);
  const selectedIndex = draft[storeKey];
  const isReady = Number(selectedIndex) >= 0;
  return (
    <NewPartyLayout
      step={step}
      actionDisabled={!isReady}
      onAction={onAction ? onAction : handleNext}
      actionTitle={actionTitle}>
      {!!imageUrl && <img src={imageUrl} className="mx-auto block h-32 pt-4" />}
      <h2>{t(survey.question)}</h2>
      <div className="grid gap-4">
        {survey.answers.map(({ title }, index) => (
          <Button
            key={index}
            variant="secondary"
            align="start"
            title={t(title)}
            selected={selectedIndex === index}
            onClick={() => setDraft({ [storeKey]: index })}
          />
        ))}
      </div>
    </NewPartyLayout>
  );
}
