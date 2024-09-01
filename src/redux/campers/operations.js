import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, limit } = {}, thunkApi) => {
    try {
      const params = page && limit ? { page, limit } : {};

      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        { params }
      );

      return {
        items: response.data.items,
        totalCount: response.data.total,
      };
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
