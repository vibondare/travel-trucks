import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleEquipment: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
    form: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
