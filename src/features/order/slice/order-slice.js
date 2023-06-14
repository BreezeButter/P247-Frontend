import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as orderService from '../../../api/order'



const initialState = {
  orderUser: [],
  loading: false,
  error: null,
  adminOrder: [],

};

export const fetchOrderAsync = createAsyncThunk(
  "order/fetchOrderAsync",
  async (_, thunkApi) => {
    try {
      const res = await orderService.getAllOrderByUser();
      console.log("orderUser",res.data)
      return res.data
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);


const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {



  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOrderAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchOrderAsync.fulfilled, (state,action) => {
        state.loading = false;
        state.orderUser = action.payload;
    
      })
});

export default orderSlice.reducer;
