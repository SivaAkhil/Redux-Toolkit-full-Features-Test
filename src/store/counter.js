import { createSlice } from "@reduxjs/toolkit";

const intial = { count: 0 };

const slice = createSlice({
  name: "counter",
  initialState: intial,
  reducers: {
    increment(state, action) {
      state.count = state.count + 1;
    },

    decrement(state, action) {
      state.count = state.count - 1;
    },

    incrementByNumber(state, action) {
      state.count = state.count + action.payload;
    },

    decrementByNumber(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByNumber, decrementByNumber } =
  slice.actions;

export default slice.reducer;
