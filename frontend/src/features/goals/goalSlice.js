import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});
export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
