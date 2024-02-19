import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ScriptItem {
  lookFor: string;
  type?: string;
  paste?: string;
}

export interface CodeState {
  script: ScriptItem[];
  prefix: string;
  suffix: string;
  typing: string;
}

const initialState: CodeState = {
  script: [],
  prefix: '',
  suffix: '',
  typing: '',
};

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    scriptSet: (state, { payload }: PayloadAction<ScriptItem[]>) => {
      state.script = payload;
    },
    prefixSet: (state, { payload }: PayloadAction<string>) => {
      state.prefix = payload;
    },
    suffixSet: (state, { payload }: PayloadAction<string>) => {
      state.suffix = payload;
    },
    typingSet: (state, { payload }: PayloadAction<string>) => {
      state.typing = payload;
    },
  },
});

export const { scriptSet, prefixSet, suffixSet, typingSet } = codeSlice.actions;
export default codeSlice.reducer;