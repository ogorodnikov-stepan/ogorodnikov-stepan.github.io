import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import appReducer from '@app/store/appSlice';
import dataReducer, {
  initiated, fileSet, dataCodeSet, componentDataSet,
} from '@app/store/dataSlice';
import codeReducer, {
  scriptSet, prefixSet, suffixSet, typingSet,
} from '@/app/store/codeSlice';

const CURSOR = '|';
const TYPE_DELAY = 30;
const PASTE_DELAY = 30;
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: initiated,
  effect: async (_, { getState, dispatch }) => {
    const { data: { currentFile, files } } = <RootState>getState();
    if (!currentFile.name) dispatch(fileSet(files[0] || ''));
  },
});

listenerMiddleware.startListening({
  actionCreator: dataCodeSet,
  effect: async ({ payload }, { dispatch }) => {
    if (payload) dispatch(componentDataSet(JSON.parse(payload)));
  },
});

listenerMiddleware.startListening({
  actionCreator: scriptSet,
  effect: async (action, listenerApi) => {
    const { getState, dispatch, cancelActiveListeners, fork, cancel } = listenerApi;
    // cancel previous typewriter process if any
    cancelActiveListeners();
    // execute typewriter script
    for await (const { lookFor, type, paste } of action.payload) {
      const { data: { dataCode } } = <RootState>getState();
      const index = dataCode.indexOf(lookFor);

      if (index !== -1) {
        // divide string to place the typewriter inbetween
        const prefix = dataCode.slice(0, index + lookFor.length);
        dispatch(prefixSet(prefix));
        const suffix = dataCode.slice(index + lookFor.length);
        dispatch(suffixSet(suffix));
        let currentValue = '';
        // place the cursor
        dispatch(typingSet(currentValue + CURSOR));
        // typewrite value
        if (type) {
          for await (const char of type) {
            const typewriterTask = fork(async ({ delay }) => {
              await delay(TYPE_DELAY);
              return char;
            });
            const result = await typewriterTask.result;
            if (result.status === 'ok') {
              currentValue += result.value;
              dispatch(typingSet(currentValue + CURSOR));
              dispatch(dataCodeSet(prefix + currentValue + suffix));
            } else {
              cancel();
            }
          }
        }
        // paste value
        if (paste) {
          const typewriterTask = fork(async ({ delay }) => {
            await delay(PASTE_DELAY);
            return paste;
          });
          const result = await typewriterTask.result;
            if (result.status === 'ok') {
              currentValue += result.value;
              dispatch(typingSet(currentValue + CURSOR));
              dispatch(dataCodeSet(prefix + currentValue + suffix));
            } else {
              cancel();
            }
        }
        // remove the cursor
        dispatch(typingSet(currentValue));
      }
    }
  },
});

export const store = configureStore({
  reducer: {
    app: appReducer,
    data: dataReducer,
    code: codeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;