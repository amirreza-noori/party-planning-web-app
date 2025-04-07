import imageUrl from "@/assets/images/email-invite.svg";
import { surveyEInvite } from "@/constants/surveys/eInvite";
import { NewPartySurveyLayout } from "@/layouts";

export default function InvitePage() {
  return (
    <NewPartySurveyLayout
      survey={surveyEInvite}
      storeKey="surveyEInvite"
      step={3}
      imageUrl={imageUrl}
    />
  );
}
