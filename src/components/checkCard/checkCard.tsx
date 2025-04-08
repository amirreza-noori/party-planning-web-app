import { CheckCardProps } from "./types";
import { TickIcon } from "@/assets/icons";
import { cn } from "@/utils";

export default function CheckCard({
  title,
  description,
  onClick,
  checked,
}: CheckCardProps) {
  return (
    <button
      className={cn(
        "ext-text bg-secondary relative flex grow cursor-pointer flex-col items-start gap-2 rounded-lg",
        "flex border border-solid border-transparent py-3 ps-11 pe-4 text-start text-sm font-bold transition-all"
      )}
      onClick={onClick}
      type="button">
      <span
        className={cn(
          "border-text absolute top-3.5 left-3 block h-4 w-4 rounded-sm border p-[1px]",
          checked && "bg-text"
        )}>
        <TickIcon
          className={cn(
            "text-secondary h-full w-full transition-all",
            checked && "opacity-100"
          )}
        />
      </span>
      <span className="text-text text-sm">{title}</span>
      {!!description && (
        <span className="text-tertiary text-xs">{description}</span>
      )}
    </button>
  );
}
