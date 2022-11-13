import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/types";

const uiInitialState: UiState = {
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModal: (previousUi, action: PayloadAction<string>) => ({
      ...previousUi,
      modal: action.payload,
    }),
    closeModal: (previousUi) => ({ ...previousUi, modal: "" }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
