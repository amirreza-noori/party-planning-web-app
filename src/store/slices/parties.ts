import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { Party } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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
    saveDraft: (state, action: PayloadAction<Partial<Omit<Party, "id">>>) => {
      state.draft = {
        ...state.draft,
        ...action.payload,
      };
    },
    setDraftStep: (state, action: PayloadAction<number>) => {
      if (action.payload > state.draftStep) state.draftStep = action.payload;
    },
    add: (state, action: PayloadAction<Omit<Party, "id">>) => {
      state.draftStep = -1;
      state.draft = {};
      const biggestId = state.list.reduce(
        (id, party) => (id < party.id ? party.id : id),
        1
      );
      state.list.push({ ...action.payload, id: biggestId + 1 });
    },
  },
});

export const { saveDraft, setDraftStep, add } = partiesSlice.actions;

export default persistReducer(
  { key: "parties", storage },
  partiesSlice.reducer
);
