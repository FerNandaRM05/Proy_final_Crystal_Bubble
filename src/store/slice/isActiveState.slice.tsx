import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isActiveState = createSlice({
  name: "isActive",
  initialState: false,
  reducers: {
    setStateActive: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStateActive } = isActiveState.actions;

export default isActiveState.reducer;
