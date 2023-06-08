import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../../../api/auth-api';
import { removeAccessToken, setAccessToken } from '../../../utils/localstorage';

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
      // const resFetchMe = await authService.fetchMe();
      // console.log(resFetchMe.data.user)
      // return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk('auth/loginAsync',
 async (input, thunkApi) => {
  try {
    const res = await authService.login(input);
    console.log( '######RES####',res)

    setAccessToken(res.data.accessToken);
    // console.log("res.data.user",res.data.user)
    // console.log("res.data",res.data)
    return res.data;
    // const resFetchMe = await authService.fetchMe();
    // return resFetchMe.data.user;
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

// export const logout = createAsyncThunk('auth/logout', async () => {
//   removeAccessToken();
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // updateProfileImage: (state, action) => {
    //   state.user.profileImage = action.payload;
    // },
    // updateCoverImage: (state, action) => {
    //   state.user.coverImage = action.payload;
    // }
  },
  extraReducers: builder =>
    builder
      // .addCase(logout.fulfilled, state => {
      //   state.isAuthenticated = false;
      //   state.user = null;
      // })
      .addCase(registerAsync.pending, state => {
        state.loading = true;
      })

      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
        // console.log('action.payload##',action.payload)
        // console.log('state.user##',state.user)
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        // console.log('action.payload##',action.payload)
        // console.log('state.loading##',state.loading )
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