import { useTranslation } from "react-i18next";

import { Button } from "@/components";
import { occasionSizeIcons } from "@/constants";
import { usePartyDraft } from "@/hooks";
import { NewPartyLayout } from "@/layouts";
import { PartySize } from "@/types";

export default function SizePage() {
  const { t } = useTranslation();
  const {
    handleNext,
    setDraft,
    draft: { size: partySize },
  } = usePartyDraft(1);

  const isReady = Number(partySize) >= 0;

  return (
    <NewPartyLayout step={1} actionDisabled={!isReady} onAction={handleNext}>
      <h2>{t("what.size")}</h2>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        {occasionSizeIcons.map(({ icon: Icon, color }, index: PartySize) => (
          <Button
            key={index}
            variant="secondary"
            title={t(`occasion.size.${index}`)}
            description={t(`occasion.sizeDescription.${index}`)}
            color={color}
            icon={<Icon />}
            selected={partySize === index}
            onClick={() => setDraft({ size: index })}
          />
        ))}
      </div>
    </NewPartyLayout>
  );
}
