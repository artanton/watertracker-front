import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
  data: null,
  waterDate: null,
  waterDose: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.activeModal = action.payload;
      document.body.style.overflow = 'hidden';
    },
    closeModal: state => {
      state.activeModal = null;
      document.body.style.overflow = '';
      state.data = null;
      state.waterDose = null;
      state.waterDate = null;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
    addWaterDose: (state, action) => {
      state.waterDose = action.payload;
    },
    addWaterDate: (state, action) => {
      state.waterDate = action.payload;
    },
  },
});

export const { openModal, closeModal, addData, addWaterDose, addWaterDate } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
