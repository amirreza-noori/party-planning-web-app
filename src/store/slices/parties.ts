import { Party } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PartiesState {
  list: Party[];
  draft: Partial<Party>;
}

const initialState: PartiesState = {
  list: [],
  draft: {},
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
    add: (state, action: PayloadAction<Party>) => {
      state.list.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveDraft, add } = partiesSlice.actions;

export default partiesSlice.reducer;
