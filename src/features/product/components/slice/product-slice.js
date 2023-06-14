import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../../../../api/product";
import { toast } from "react-toastify";

const initialState = {
  product: [],
  loading: false,
  error: null,
  selected: "",
  selectedCat: "",
  productCat: [],
};

export const fetchAsync = createAsyncThunk(
  "product/fetchAsync",
  async (_, thunkApi) => {
    try {
      const res1 = await productService.getAllProductDog();

      return res1.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const fetchAsyncCat = createAsyncThunk(
  "product/fetchAsyncCat",
  async (_, thunkApi) => {
    try {
      const res1 = await productService.getAllProductCat();

      return res1.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const selectedAsync = createAsyncThunk(
  "product/selectedAsync",
  async (input, thunkApi) => {
    try {
      console.log(input)
      const res2 = await productService.getAllProductDogByID(input);

      return res2.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const selectedAsyncCat = createAsyncThunk(
  "product/selectedAsyncCat",
  async (input, thunkApi) => {
    try {
      const res = await productService.getAllProductCatByID(input);
      console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (input, thunkApi) => {
    try {
      console.log(input);
      const res = await productService.createProduct(input);

      return res.data;
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

      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchAsyncCat.fulfilled, (state, action) => {
        state.loading = false;
        state.productCat = action.payload;
      })
      .addCase(selectedAsyncCat.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCat = action.payload;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(selectedAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectedAsync.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.loading = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
        toast.success("Create Product Success");
      })
      .addCase(selectedAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default productSlice.reducer;
