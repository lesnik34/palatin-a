import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jumbotron: {},
    advantages: [],
    previews: [],
    partners: [],
    locations: [],
    global: {}
};

const contentsSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setJumbotron: (state, action) => {
            state.jumbotron = action.payload;
        },
        setAdvantages: (state, action) => {
            state.advantages = action.payload;
        },
        setPreview: (state, action) => {
            state.previews = action.payload;
        },
        setPartners: (state, action) => {
            state.partners = action.payload;
        },
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        setGlobal: (state, action) => {
            state.global = action.payload;
        }
    }
});
export const {
    setJumbotron,
    setAdvantages,
    setPreview,
    setPartners,
    setLocations,
    setGlobal
} = contentsSlice.actions;

export default contentsSlice;