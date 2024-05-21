import { createSlice, isAnyOf } from '@reduxjs/toolkit';

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
        const { waterTotal, persantRate, waterSavings, waterNotes } =
          action.payload;
        state.waterTotal = waterTotal;
        state.persantRate = persantRate;
        state.waterSavings = waterSavings;
        state.waterNotes = waterNotes;
      })

      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.month = action.payload;
      })

      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { lastWaterDose, dailyNorma, persantRate, waterSavings } =
          action.payload;

        state.waterNotes.push(lastWaterDose);
        state.dailyNorma = dailyNorma;
        state.persantRate = persantRate;
        state.waterSavings = waterSavings;
      })
      // .addCase(updateWater.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   const index = state.waterNotes.findIndex(
      //     item => item._id === action.payload.waterId
      //   );
      //   if (state.waterNotes[index]) {
      //     const { createdDate, waterDose } = action.payload.waterData;

      //     createdDate && (state.waterNotes[index].createdDate = createdDate);
      //     waterDose && (state.waterNotes[index].waterDose = waterDose);
      //   }
      // })

      .addCase(updateWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { waterTotal, persantRate, waterSavings } = action.payload;
        console.log(action.payload);
        const note = state.waterNotes.find(item => {
          return item._id === action.payload.updatedWaterNote._id;
        });
        if (note) {
          const { createdDate, waterDose } = action.payload.updatedWaterNote;
          if (createdDate) note.createdDate = createdDate;
          if (waterDose) note.waterDose = waterDose;
          state.waterTotal = waterTotal;
          state.persantRate = persantRate;
          state.waterSavings = waterSavings;
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
        // const { persantRate } = action.payload;
        const index = state.waterNotes.findIndex(
          item => item.id === action.payload.id
        );
        state.waterNotes.splice(index, 1);
        // state.persantRate = persantRate;
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
