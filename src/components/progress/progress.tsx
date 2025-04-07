import { ProgressProps } from "./types";

export default function Progress({ value }: ProgressProps) {
  return (
    <div className="h-[3px] w-full rounded-full bg-[#474747]">
      <div
        className="bg-primary h-full rounded-full transition-all duration-300 ease-in-out"
        role="progressbar"
        style={{ width: `${value}%` }}></div>
    </div>
  );
}
