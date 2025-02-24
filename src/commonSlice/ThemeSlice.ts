import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ThemeStateType {
  mode: "dark" | "light";
}

const initialState: Partial<ThemeStateType> = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeStateType["mode"]>) => {
      const { payload } = action;
      state.mode = payload;
    },
  },
});

export const setThemeMode = themeSlice.actions.setThemeMode;

export default themeSlice.reducer;
