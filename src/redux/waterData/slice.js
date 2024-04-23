import { createSlice } from '@reduxjs/toolkit';
import { isAnyOf } from '@reduxjs/toolkit';
import {
  getWaterToday,
  deleteWater,
  updateWater,
  patchWater,
  addWater,
  getMonthWater,
} from './thunk.js';

const initialState = {
  month: [],
  today: {
    dailyNorm: 0,
    waterToday: [],
  },
  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          getWaterToday.pending,
          deleteWater.pending,
          updateWater.pending,
          patchWater.pending,
          addWater.pending,
          getMonthWater.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getWaterToday.fulfilled,
          deleteWater.fulfilled,
          updateWater.fulfilled,
          patchWater.fulfilled,
          getMonthWater.fulfilled
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getWaterToday.rejected,
          deleteWater.rejected,
          updateWater.rejected,
          patchWater.rejected,
          addWater.rejected,
          getMonthWater.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.today.waterToday = state.today.waterToday.filter(
          item => item._id !== action.payload
        );
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.today.waterToday.push(action.payload);
      })
      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.month = action.payload;
      });
  },
});

export default waterSlice.reducer;
