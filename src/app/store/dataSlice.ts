import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFileObject } from '@/app/store/helpers';

export interface FileState {
  name?: string;
  nav?: string;
  t?: string;
}

export interface DataState {
  components: Record<string, string>;
  files: string[];
  currentFile: FileState;
  prevFile?: FileState;
  nextFile?: FileState;
  componentCode: string;
  dataCode: string;
  componentData: Record<string, string | string[]>;
}

const initialState: DataState = {
  components: {},
  files: [],
  currentFile: {},
  prevFile: {},
  nextFile: {},
  dataCode: '',
  componentCode: '',
  componentData: {},
};

export type InitPayload = Pick<DataState, 'components' | 'files'>;

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initiated: (state, { payload }: PayloadAction<InitPayload>) => {
      state.files = payload.files;
      state.components = payload.components;
    },
    fileSet: (state, { payload }: PayloadAction<NonNullable<FileState['name']>>) => {
      const { files, components } = state;
      state.currentFile = getFileObject(payload);
      const fileName = state.currentFile.name || '';
      state.componentCode = components[fileName] || '';
      state.componentData = {};
      const index = files.findIndex((f) => (f === fileName));
      state.prevFile = index > 0 ? getFileObject(files[index - 1]) : {};
      state.nextFile = index < files.length ? getFileObject(files[index + 1]) : {};
    },
    dataCodeSet: (state, { payload }: PayloadAction<DataState['dataCode']>) => {
      state.dataCode = payload;
    },
    componentDataSet: (state, { payload }: PayloadAction<DataState['componentData']>) => {
      state.componentData = payload;
    },
  },
});

export const {
  initiated, fileSet, dataCodeSet, componentDataSet,
} = dataSlice.actions;
export default dataSlice.reducer;