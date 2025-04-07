import { Party } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PartiesState {
  list: Party[];
  draft: Partial<Party>;
  draftStep: number;
}

const initialState: PartiesState = {
  list: [],
  draft: {},
  draftStep: -1,
};

export const partiesSlice = createSlice({
  name: "parties",
  initialState,
  reducers: {
    saveDraft: (state, action: PayloadAction<Partial<Party>>) => {
      state.draft = {
        ...state.draft,
        ...action.payload,
      };
    },
    setDraftStep: (state, action: PayloadAction<number>) => {
      if (action.payload > state.draftStep) state.draftStep = action.payload;
    },
    add: (state, action: PayloadAction<Party>) => {
      state.draftStep = -1;
      state.draft = {};
      state.list.push(action.payload);
    },
  },
});

export const { saveDraft, setDraftStep, add } = partiesSlice.actions;

export default partiesSlice.reducer;
