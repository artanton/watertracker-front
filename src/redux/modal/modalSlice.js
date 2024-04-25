import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
  data: null,
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
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { openModal, closeModal, addData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
