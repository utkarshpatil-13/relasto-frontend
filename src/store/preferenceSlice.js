import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    propertyType : '',
    priceRange : {
        min: 0,
        max: 30000000,
    },
    areaRange: {
        min: 0,
        max: 3000,
    },
    city: [],
    state: '',
}

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setPropertyType: (state, action) => {
            state.propertyType = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setAreaRange: (state, action) => {
            state.areaRange = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
    }
});

export const {setPropertyType, setAreaRange, setPriceRange, setState, setCity} = preferencesSlice.actions;

export default preferencesSlice.reducer;