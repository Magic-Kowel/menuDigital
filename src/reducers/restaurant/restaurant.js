import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, NAME_TOKEN } from "../../config";

const initialState = {
  restaurants: [],
};

export const getRestaurantsUser = createAsyncThunk(
  "restaurant/getRestaurantsUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.get(`${BASE_URL}restaurants/user`, {
        headers: {
          "x-access-token": token,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurantsUser.fulfilled, (state, action) => {
      state.restaurants = action.payload;
    });
    builder.addCase(getRestaurantsUser.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

export default restaurantSlice.reducer;