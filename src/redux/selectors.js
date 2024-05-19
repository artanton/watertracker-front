// import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;

/**
 * water selectors
 */
export const selectWater = state => state.wat;
export const selectorDailyNorma = state => state.auth.userData.dailyNorma;
export const selectorPersantRate = state => state.wat.persantRate;
export const selectorWaterSavings = state => state.wat.waterSavings;
export const selectorWaterNotes = state => state.wat.waterNotes;
// export const selectorWaterNotes = state => {
//     console.log("State:", state); 
//     return state.wat.waterNotes;
//   };
export const selectorMonth = state => state.wat.month;

export const selectorLoading = state => state.wat.loading;
export const selectorError = state => state.wat.error;

/**
 *  end water selectors
 */

// // user selectors
// export const selectUser = state => state.auth.user;
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectToken = state => state.auth.token;
// export const selectEmail = state => state.auth.user.email;
// export const selectName = state => {
//   return state.auth.user.name;
// };

// export const selectUserLogo = state => state.auth.user.avatarURL;
// export const selectDailyNorma = state => state.auth.user.waterRate;

// export const selectIsAuth = createSelector(
//   [selectIsLoggedIn, selectToken],
//   (isLoggedIn, token) => token && isLoggedIn
// );

// export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectMonthInfo = state => state.water.monthInfo;
// export const selectorWaterInfo = state => state.water.today;
// export const selectWaterList = state => state.water.today.dailyWaterList;
// export const selectIsWaterLoading = state => state.water.isLoading;
// export const selectDayPercent = state => state.water.today.percent;
// export const selectAddWater = state => state.water.waterVolume;
// export const selectTimeOfPortion = state => state.water.date;

// export const selectError = state => state.auth.error;
