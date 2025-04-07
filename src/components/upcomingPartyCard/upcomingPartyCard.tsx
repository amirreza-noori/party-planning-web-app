import Button from "../button/button";
import { UpcomingPartyCardProps } from "./types";
import notepadDoneUrl from "@/assets/images/notepad-done.png";
import notepadUrl from "@/assets/images/notepad.png";

export default function UpcomingPartyCard({
  event,
  onAction,
}: UpcomingPartyCardProps) {
  return (
    <div className="relative grid min-h-32 w-full justify-start rounded-md bg-amber-300 bg-linear-to-br from-[#50586A] to-[#1E2530] py-4 ps-5 pe-36">
      <img
        className="absolute top-1/2 right-8 -translate-y-1/2"
        src={event ? notepadUrl : notepadDoneUrl}
      />
      <h2 className="!m-0 mb-2 !p-0">No Upcoming House Party</h2>
      <span className="mb-4">Plan your house party</span>
      <Button title="Create a New Event" onClick={onAction} />
    </div>
  );
}
