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
  dailyNorma: 2000,
  persantRate: 0,
  waterSavings: 0,
  // targetMonth: '2020-01-01',
  waterNotes: [],
  month: [],

  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getWaterToday.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state = action.payload;
      })

      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.month = action.payload;
      })

      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { waterNotes, dailyNorma, persantRate } = action.payload;

        state.waterNotes.push(...waterNotes);

        state.dailyNorma = dailyNorma;
        state.persantRate = persantRate;
      })

      .addCase(updateWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const note = state.waterNotes.find(
          item => item.id === action.payload.id
        );
        if (note) {
          const { updatedData } = action.payload;
          if (updatedData.createdDate) {
            note.createdDate = updatedData.createdDate;
          }
          if (updatedData.waterDose) {
            note.waterDose = updatedData.waterDose;
          }
        }
      })

      .addCase(patchWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { dailyNorma, persantRate } = action.payload;

        state.dailyNorma = dailyNorma;
        state.persantRate = persantRate;
      })

      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { persantRate } = action.payload;
        const index = state.waterNotes.findIndex(
          item => item.id === action.payload.id
        );
        state.waterNotes.splice(index, 1);
        state.persantRate = persantRate;
      })
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
      );
  },
});

export const waterReducer = waterSlice.reducer;
