import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },

  reduсers: {
    changeFilter(state, action) {
        state.status = action.payload
    }
  }
})

export const { changeFilter } = slice.actions;
export default slice.reducer;

