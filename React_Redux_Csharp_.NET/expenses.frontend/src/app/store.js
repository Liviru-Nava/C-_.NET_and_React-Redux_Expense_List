import { configureStore } from '@reduxjs/toolkit';
import { expenseReducer} from './expenseReducer';

export const store = configureStore({
  reducer: {
    expenseReducer: expenseReducer,
  },
});
