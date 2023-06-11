import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../../../../api/product";

const initialState = {
  product: [],
  loading: false,
  error: null,
  selected: ''
};

export const fetchAsync = createAsyncThunk(
  "product/fetchAsync",
  async (_, thunkApi) => {
    try {
      const res1 = await productService.getAllProductDog();
     
      return res1.data

    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const selectedAsync = createAsyncThunk(
  "product/selectedAsync",
  async (input, thunkApi) => {
    try {
     
      const res2 = await productService.getAllProductDogByID(input);
      console.log('AAA',res2.data)
      return res2.data;

    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchAsync.fulfilled, (state,action) => {
        state.loading = false;
        state.product = action.payload;
    
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(selectedAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectedAsync.fulfilled, (state,action) => {
        state.loading = false;
        state.selected = action.payload;
        console.log('DDDD',state.selected)
      })
      .addCase(selectedAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default productSlice.reducer;
