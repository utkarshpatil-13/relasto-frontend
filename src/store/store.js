import { configureStore } from '@reduxjs/toolkit'
import PreferenceReducer from './preferenceSlice.js'

export default configureStore({
    reducer : {
        preferences : PreferenceReducer
    }
});

