import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import costomCounterReducer from '../features/customCounter/customCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: costomCounterReducer
  },
});
