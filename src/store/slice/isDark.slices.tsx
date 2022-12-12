import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isDark = createSlice({
  name: "isDark",
  initialState: false,
  reducers: {
    setStateDark: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStateDark } = isDark.actions;

export default isDark.reducer;
