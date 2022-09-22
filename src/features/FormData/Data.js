import { createSlice } from "@reduxjs/toolkit";

const formReducers = createSlice({
  name: "usersData",
  initialState: {
    value: [],
  },
  reducers: {
    storingData: (state, data) => {
      state.value = data.payload; // if this will not work try state.value
    },
  },
});

export const { storingData } = formReducers.actions;
export default formReducers.reducer;
