import { createSlice } from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    setLocationAnimalBreed: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationAnimalBreed } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
