import { useTranslation } from "react-i18next";

import { Button } from "@/components";
import { partyTypeIcons } from "@/constants";
import { usePartyDraft } from "@/hooks";
import { NewPartyLayout } from "@/layouts";
import { PartyOccasion } from "@/types";

export default function OccasionPage() {
  const { t } = useTranslation();
  const {
    handleNext,
    setDraft,
    draft: { type: partyType },
  } = usePartyDraft(0);

  const isReady = Number(partyType) >= 0;

  return (
    <NewPartyLayout step={0} actionDisabled={!isReady} onAction={handleNext}>
      <h2>{t("what.occasion")}</h2>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        {partyTypeIcons.map(({ icon: Icon, color }, index: PartyOccasion) => (
          <Button
            key={index}
            variant="secondary"
            title={t(`occasion.type.${index}`)}
            color={color}
            icon={<Icon />}
            selected={partyType === index}
            onClick={() => setDraft({ type: index })}
          />
        ))}
      </div>
    </NewPartyLayout>
  );
}
