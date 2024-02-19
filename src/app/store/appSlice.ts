import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  theme: 'theme-light' | 'dark' | 'system';
  isDark?: boolean;
}

const initialState: AppState = {
  theme: 'system',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    themeSet: (state: AppState, action: PayloadAction<AppState['theme']>) => {
      state.theme = action.payload;
      state.isDark =
      (action.payload === 'dark') ||
      (action.payload === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    },
  },
});

export const { themeSet } = appSlice.actions;
export default appSlice.reducer;