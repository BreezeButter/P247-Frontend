import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as CartService from '../../../../api/cart'


export const syncCartWithDatabase = createAsyncThunk(
  'cart/syncCartWithDatabase',
  async (items , thunkApi) => {
    try {
      console.log('item',items)
      const response = await CartService.addCart({productId:items.productId,productAmount:items.quantity});
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    count: 0, 
    canAdd: true,
    loading: false, 
    error: null
    , 
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const newItem = action.payload;
    //   const existingItem = state.items.find(item => item.id === newItem.id);
      
    //   if (existingItem) {
        
    //     existingItem.quantity++;
    //   } else {
       
    //     state.items.push({ ...newItem, quantity: 1 });
    //   }
      
    //   state.count++;
    // },
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
        state.canAdd = false;
      })
      .addCase(syncCartWithDatabase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
