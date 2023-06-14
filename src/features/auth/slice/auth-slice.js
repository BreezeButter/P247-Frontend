import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../../../api/auth-api';
import { removeAccessToken, setAccessToken } from '../../../utils/localstorage';
import { toast } from 'react-toastify'; 

const initialState = {
  isAuthenticated : false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false
};

export const registerAsync = createAsyncThunk(
  'auth/registerAsync',
  async (input, thunkApi) => {
    try {
        const res =  await authService.register(input);

        setAccessToken(res.data.accessToken);
        
        return res.data; 
     
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk('auth/loginAsync',
 async (input, thunkApi) => {
  try {
    const res = await authService.login(input);


    setAccessToken(res.data.accessToken);

    return res.data;

  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const fetchMe = createAsyncThunk('auth/fetchMe', async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }

});

export const logout = createAsyncThunk('auth/logout', async () => {
  removeAccessToken();
  
});

export const imageAsync = createAsyncThunk('auth/imageAsync', async (input, thunkApi) => {
  try {
    const res = await authService.uploadImage(input);
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }

});
export const userEditAsync = createAsyncThunk('auth/userEditAsync', async (input, thunkApi) => {
  try {
    console.log(input)
    const res = await authService.editUser(input);
    console.log(res.data)
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }

});


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {  },
  extraReducers: builder =>
    builder

      .addCase(registerAsync.pending, state => {
        state.loading = true;
      })

      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
   
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
   
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading =false;
      })

      .addCase(loginAsync.pending, state => {
        state.loading = true;
      })

      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(imageAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
        toast.success('Upload Success')
      })
      .addCase(imageAsync.pending, state => {
        state.loading = true;
      })
      .addCase(userEditAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
        toast.success('Edit Success')
      })
      .addCase(userEditAsync.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.loading= false;
      })
      .addCase(fetchMe.pending, state => {
        state.loading = true;
      })
});

export default authSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;