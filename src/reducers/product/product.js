import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, NAME_TOKEN } from "../../config";
export const getProducts = createAsyncThunk(
    'get/seccions',
    async(idSeccion,thunkAPI) => {
      try {
        const token = sessionStorage.getItem(NAME_TOKEN);
        const response = await axios.get(`${BASE_URL}products/${idSeccion}`,{
          headers:{
            "x-access-token": token
          }
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);
export const createProduct = createAsyncThunk(
  'post/product',
  async (data, thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.post(`${BASE_URL}product`, data,  {
        headers: {
            "x-access-token": token,
            'Content-Type': 'multipart/form-data'
        }
    });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState ={
    products: [],
    loading: false,
    error: null,
  }
  const productSlice = createSlice({
      name: "product",
      initialState: initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products=action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
        builder
          .addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
          })
          .addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
  });
    
  export default productSlice.reducer;