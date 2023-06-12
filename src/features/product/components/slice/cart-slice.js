import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as CartService from '../../../../api/cart'


export const syncCartWithDatabase = createAsyncThunk(
  'cart/syncCartWithDatabase',
  async (items , thunkApi) => {
    try {
      const addItem =  {...items, quantity : 1}
       console.log(addItem)
      const response = await CartService.addCart({productId:addItem.productId, productAmount:addItem.quantity});
      return response.data;
      
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  } 
);
export const syncCartAll = createAsyncThunk(
  'cart/syncCartAll',
  async (_, thunkApi) => {
    try {
      const response = await CartService.fetchCartAll();
      const sum = response.data.reduce((acc,el)=>{
        acc+=el.productAmount
        return acc
      },0)
      return {cart: response.data, sum}
     
      
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  } 
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    cart: [], 
    loading: false, 
    error: null,
    numCart :''
  },
  reducers: {
 
      increment: (state) => {
       
        state.numCart += 1;
      },
      decrement: (state) => {
        state.numCart -= 1;
      },

  },
  extraReducers: builder => {
    builder
      .addCase(syncCartWithDatabase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncCartWithDatabase.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(syncCartWithDatabase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(syncCartAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncCartAll.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cart = action.payload.cart
        state.numCart = action.payload.sum
        console.log('state.cart',action.payload)
      })
      .addCase(syncCartAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { addToCart,increment,decrement } = cartSlice.actions;

export default cartSlice.reducer;
