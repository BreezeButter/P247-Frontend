import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: [],
};

// Async thunk action to increase a value
export const increaseValue = createAsyncThunk(
  "counter/increase",
  async (amount, thunkApi) => {
    try {
      // Here you can perform any asynchronous operations, such as making an API call
      // For simplicity, let's just simulate a delay using setTimeout
      // await new Promise(resolve => setTimeout(resolve, 1000));

      // Return the new value
      console.log("amount", amount);
      return amount;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

// Create a slice with the initial state and the increase action
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(increaseValue.fulfilled, (state, action) => {
      const itemIdex = state.cartItem.findIndex(
        (item) => item.id === action.productId
      );
      console.log("itemIdex", itemIdex);

      // Update the state with the new value received from the async thunk
      if (itemIdex >= 0) {
        state.cartItem[itemIdex].q += 1;
        toast.success(`${state.cartItem[itemIdex].productName} add +1`);
      } else {
        const temp = { ...action.payload, q: 1 };

        state.cartItem.push(temp);
        toast.success(`${action.payload.productName} added to cart`);
      }
    });
  },
});

// Export the slice reducer
export default counterSlice.reducer;
