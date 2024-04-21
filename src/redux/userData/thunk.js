import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from 'redux/authorization/authReducer';

export const getWaterToday = createAsyncThunk(
  'water/getWaterToday',
  async (waterId, thunkApi) => {
    try {
      const { data } = await authInstance.get(`/water/${waterId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteEntry',
  async (waterId, thunkApi) => {
    try {
      await authInstance.delete(`/water/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'today/updateWater',
  async (waterId, thunkApi) => {
    try {
      const { data } = await authInstance.patch(`/water/${waterId}`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addWater = createAsyncThunk(
  'today/addWater',
  async (waterId, thunkApi) => {
    try {
      const { data } = await authInstance.post(`/water/${waterId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMonthWater = createAsyncThunk(
  'today/getMonthWater',
  async (waterId, thunkApi) => {
    try {
      const { data } = await authInstance.get(`/water/?date=${waterId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
