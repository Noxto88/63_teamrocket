import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "openSlidingComponent",
  initialState: {
    value: false,
    component: null,
  },
  reducers: {
    openSlidingComponent: (state, action) => {
      state.value = true;
      state.component = action.payload;
    },
    closeSlidingComponent: (state) => {
      state.value = false;
      state.component = null;
    },
  },
});

export const { closeSlidingComponent, openSlidingComponent } = slice.actions;
export const openOrClose = (state) => state.openSlidingComponent.value;
export const openSlidingComponentState = (state) =>
  state.openSlidingComponent.component;

export default slice.reducer;
