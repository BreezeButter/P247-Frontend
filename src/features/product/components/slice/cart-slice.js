import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as CartService from '../../../../api/cart'
import { toast } from 'react-toastify'; 


export const syncCartWithDatabase = createAsyncThunk(
  'cart/syncCartWithDatabase',
  async (items , thunkApi) => {
    try {
      const addItem =  {...items, quantity : 1}
    
      const response = await CartService.addCart({productId:addItem.productId, productAmount:addItem.quantity});
      console.log(response.data)
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

export const incrementProduct = createAsyncThunk(
  'cart/incrementProduct',
  async (input, thunkApi) => {
    try {
   
      const response = await CartService.increment({productId:input.Product.productId});
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

export const decrementProduct = createAsyncThunk(
  'cart/decrementProduct',
  async (input, thunkApi) => {
    try {
      const response = await CartService.decrement({productId:input.Product.productId});
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

export const delProduct = createAsyncThunk(
  'cart/delProduct',
  async (input, thunkApi) => {
    try {
       console.log('first',input.Product.productId)
      const response = await CartService.delProduct({productId:input.Product.productId});
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

export const checkOutProduct = createAsyncThunk(
  'cart/checkOutProduct',
  async (_, thunkApi) => {
    try {

      const response = await CartService.checkOutProduct();
      console.log('checkOutProduct response.data',response.data)
      return response.data
     
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  } 
);
export const paymentAsync = createAsyncThunk(
  'cart/paymentAsync',
  async (input, thunkApi) => {
    try {
      console.log('cart/paymentAsync',input)
      const response = await CartService.payment(input);
      return response.data
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
    numCart :'',
    order:'',
    payment:'',
    paymentSuccess:false
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(syncCartWithDatabase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncCartWithDatabase.fulfilled, (state,action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload
        state.numCart = action.payload.sum
        toast.success('Add to cart sucess')
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
      })
      .addCase(syncCartAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(incrementProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cart = action.payload.cart
        state.numCart = action.payload.sum
      })
      .addCase(decrementProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cart = action.payload.cart
        state.numCart = action.payload.sum
      })
      .addCase(delProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cart = action.payload.cart
        state.numCart = action.payload.sum
        toast.error('Delete success')
      })
      .addCase(checkOutProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.order = action.payload

        toast.success('Order success')
      })
      .addCase(paymentAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.payment= action.payload;
        state.paymentSuccess =true;

        toast.success('Payment success')
      })
      .addCase(paymentAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.paymentSuccess =false;
      })
      
  },
});


export default cartSlice.reducer;
