import styles from "./prop.module.css";
import { ButtonProps } from "./types";
import { cn } from "@/utils";

export default function Button({
  title,
  icon,
  variant = "primary",
  description,
  align,
  color = "violet",
  selected,
  disabled,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "text-text flex grow cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-solid border-transparent px-4 py-3 text-sm font-bold transition-all",
        styles[`variant_${variant}`],
        styles[`align_${align}`],
        styles[`color_${color}`],
        selected && "border-[var(--button-color)]",
        disabled && "pointer-events-none cursor-default opacity-50",
        className
      )}>
      {!!icon && <span className="text-[var(--button-color)]">{icon}</span>}
      {title}
      {!!description && (
        <span className="font-normal text-[#ADADAD]">{description}</span>
      )}
    </button>
  );
}
