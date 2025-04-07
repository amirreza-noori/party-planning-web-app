import { useNavigate } from "react-router";

import { routes } from "@/routes";
import { saveDraft, setDraftStep } from "@/store/slices/parties";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Party } from "@/types";

export const usePartyDraft = (step: number) => {
  const navigate = useNavigate();
  const draftStep = useAppSelector((store) => store.parties.draftStep);
  const draft = useAppSelector((store) => store.parties.draft);
  const dispatch = useAppDispatch();

  const stepRoutes = [
    routes.new.occasion,
    routes.new.size,
    routes.new.data,
    routes.new.invite,
    routes.new.food,
    routes.new.alcohol,
    routes.new.decorator,
    routes.new.game,
  ];

  // if (draftStep < step) navigate(stepRoutes[draftStep + 1]);

  const handleNext = () => {
    dispatch(setDraftStep(step));
    navigate(stepRoutes[step + 1]);
  };
  const setDraft = (data: Partial<Party>) => dispatch(saveDraft(data));

  return { handleNext, draft, draftStep, setDraft };
};
