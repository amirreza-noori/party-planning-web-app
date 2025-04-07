import { useNavigate } from "react-router";

import { HeaderProps } from "./types";
import { BackIcon } from "@/assets/icons";

export default function Header({ title, backButton }: HeaderProps) {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
      {backButton && (
        <span onClick={handleBack} className="cursor-pointer">
          <BackIcon />
        </span>
      )}
      <h1 className="!my-2">{title}</h1>
    </div>
  );
}
