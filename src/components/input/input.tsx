import { useId } from "react";

import { InputProps } from "./types";
import { cn } from "@/utils";

export default function Input({
  name,
  type,
  label,
  placeholder,
  adornment,
  defaultValue,
}: InputProps) {
  const id = useId();

  const inputMode = type === "number" ? "numeric" : undefined;

  return (
    <div className="grid gap-2 pt-4">
      <label className="text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <div className="relative grid">
        <input
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          className={cn(
            "bg-secondary text-text border-tertiary h-10 rounded-md border px-2",
            "placeholder:text-tertiary"
          )}
          inputMode={inputMode}
          defaultValue={defaultValue}
        />
        {!!adornment && (
          <div className="text-tertiary absolute top-1/2 right-2 h-6 w-6 -translate-y-1/2 [&_svg]:h-full [&_svg]:w-full">
            {adornment}
          </div>
        )}
      </div>
    </div>
  );
}
