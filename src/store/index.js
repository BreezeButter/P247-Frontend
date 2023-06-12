import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice';
import productsReducer from '../features/product/components/slice/product-slice'
import cartReducer from '../features/product/components/slice/cart-slice'



const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productsReducer,
    cart:cartReducer

  }
});

export default store;
