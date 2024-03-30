import { configureStore } from '@reduxjs/toolkit'
import PreferenceReducer from './preferenceSlice.js'
import authReducer from './authSlice.js'

export default configureStore({
    reducer : {
        preferences : PreferenceReducer,
        auth: authReducer
    }
});

