import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducer/cartSlice';

export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
})