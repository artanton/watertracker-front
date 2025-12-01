import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use this line in development and deploment to server
  // baseURL: 'https://watertracker-backend-4r1j.onrender.com/api',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/auth/register', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/auth/login', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiRefreshUser = createAsyncThunk(
  'auth/apiRefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue('You don’t have any token!');
    try {
      setToken(token);
      const { data } = await authInstance.get('/auth/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiOauth = createAsyncThunk(
  'auth/apiOauth',
  async (token, thunkApi) => {
    if (!token) {
      return thunkApi.rejectWithValue('You don’t have any token!');
    }

    try {
      setToken(token);
      const { data } = await authInstance.get('/auth/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  'auth/apiLogoutUser',
  async (_, thunkApi) => {
    try {
      await authInstance.post('/auth/logout');
      clearToken();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiUpdateUserSettings = createAsyncThunk(
  'user/UpdateUserSettings',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.patch('/updateProfile', formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const apiGetUserSettings = createAsyncThunk(
  'user/getUserSettings',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.get('/updateProfile', formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const patchWater = createAsyncThunk(
  'today/patchWater',
  async (waterData, thunkApi) => {
    try {
      const { data } = await authInstance.patch(`/water/waterrate/`, waterData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiOauth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;

        state.userData = {
          _id: action.payload._id,
          avatarURL: action.payload.avatarURL,
          email: action.payload.email,
          userName: action.payload.userName,
          dailyNorma: action.payload.dailyNorma,
        };
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(apiUpdateUserSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(apiGetUserSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(patchWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.dailyNorma = action.payload.dailyNorma;
      })
      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiRefreshUser.pending,
          apiOauth.pending,
          apiLogoutUser.pending,
          apiUpdateUserSettings.pending,
          apiGetUserSettings.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiRefreshUser.rejected,
          apiOauth.rejected,
          apiLogoutUser.rejected,
          apiUpdateUserSettings.rejected,
          apiGetUserSettings.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
