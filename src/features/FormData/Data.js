import { createSlice } from "@reduxjs/toolkit";

const formReducers = createSlice({
  name: "usersData",
  initialState: {
    value: "",
  },
  reducers: {
    storingData: (state, data) => {
      state.value = data; // if this will not work try state.data
    },
  },
});

export const { storingData } = formReducers.actions;
export default formReducers.reducer;
