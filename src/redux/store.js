import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import testReducer from './reducerLoginPage';
export const store = configureStore({
    reducer: {
        loginReducer: { testReducer }
    },
    middleware: [thunk]
});