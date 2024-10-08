import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Demo } from '../Interfaces/Interface';

interface DemoState {
  demos: Demo[];
  selectedDemo?: Demo;
}

const initialState: DemoState = {
  demos: [],
  selectedDemo: undefined,
};

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setDemos(state, action: PayloadAction<Demo[]>) {
      state.demos = action.payload;
    },
    selectDemo(state, action: PayloadAction<Demo>) {
      state.selectedDemo = action.payload;
    },
  },
});

export const { setDemos, selectDemo } = demoSlice.actions;
export default demoSlice.reducer;
