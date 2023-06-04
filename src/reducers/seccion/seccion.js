import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, NAME_TOKEN } from "../../config";

export const createSeccion = createAsyncThunk(
  'post/seccion',
  async (data, thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.post(`${BASE_URL}seccion`, data,  {
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
export const updateSeccion = createAsyncThunk(
  'patch/seccion',
  async (data, thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.patch(`${BASE_URL}seccion`, data,  {
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
export const getSeccions = createAsyncThunk(
  'get/seccions',
  async(idRestaurant,thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.get(`${BASE_URL}seccions/${idRestaurant}`,{
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
export const getSeccion = createAsyncThunk(
  'get/seccion',
  async(idSeccion,thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.get(`${BASE_URL}seccion/${idSeccion}`,{
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
export const deleteSeccion = createAsyncThunk(
  'delete/seccion',
  async(idSeccion,thunkAPI) => {
    try {
      const token = sessionStorage.getItem(NAME_TOKEN);
      const response = await axios.delete(`${BASE_URL}seccion/${idSeccion}`,{
          headers: {
              "x-access-token": token
          }
      });
      return response.status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState ={
  seccions: [],
  loading: false,
  error: null,
}
const seccionSlice = createSlice({
    name: "seccion",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createSeccion.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createSeccion.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(createSeccion.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      builder
        .addCase(updateSeccion.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateSeccion.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(updateSeccion.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      builder
      .addCase(getSeccions.pending,(state) =>{
        state.loading = true;
        state.error = null;
      })
      .addCase(getSeccions.fulfilled,(state,action)=>{
        state.loading = false;
        state.seccions=action.payload;
      })
      .addCase(getSeccions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      builder
      .addCase(getSeccion.pending,(state) =>{
        state.loading = true;
        state.error = null;
      })
      .addCase(getSeccion.fulfilled,(state,action)=>{
        state.loading = false;
        state.seccions=action.payload;
      })
      .addCase(getSeccion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});
  
export default seccionSlice.reducer;