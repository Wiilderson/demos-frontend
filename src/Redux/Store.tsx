import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './DemoSlice';

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
