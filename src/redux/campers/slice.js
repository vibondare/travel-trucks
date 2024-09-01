import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations.js";

export const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: false,
    page: 1,
    limit: 4,
    totalCount: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetItems: (state) => {
      state.items = [];
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.items];
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchAllCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { setPage } = slice.actions;

export default slice.reducer;
