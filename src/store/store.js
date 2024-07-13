import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
const store = configureStore({
    reducer : {
        // Add feautures
        auth : authSlice,
    }
});
export default store;