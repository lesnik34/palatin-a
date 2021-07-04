import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jumbotron: {},
    advantages: [],
    previews: [],
    partners: [],
    locations: [],
    global: {},
    routes: [],
    services: {}
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
        },
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setRoutes: (state, action) => {
            state.routes = action.payload;
        }
    }
});
export const {
    setJumbotron,
    setAdvantages,
    setPreview,
    setPartners,
    setLocations,
    setGlobal,
    setServices,
    setRoutes
} = contentsSlice.actions;

export default contentsSlice;