import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../authorization/authReducer';

export const getWaterToday = createAsyncThunk(
  'water/getWaterToday',
  async thunkApi => {
    try {
      const date = Date.now();
      const { data } = await authInstance.get(`/water/today?date=${date}`);
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
      await authInstance.delete(`/water/remove/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'today/updateWater',
  async ({ waterId, waterData }, thunkApi) => {
    try {
      const { data } = await authInstance.patch(
        `/water/update/${waterId}`,
        waterData
      );
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
export const addWater = createAsyncThunk(
  'today/addWater',
  async (waterData, thunkApi) => {
    try {
      const { data } = await authInstance.post(`/water/add`, waterData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMonthWater = createAsyncThunk(
  'today/getMonthWater',
  async (waterDate, thunkApi) => {
    try {
      const { data } = await authInstance.get(
        `/water/month/?date=${waterDate}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
