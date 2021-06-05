import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './slices/rootReducer';

const initStore = () => configureStore({
    reducer: rootReducer,
    middleware: [ thunk ]
});

const wrapper = createWrapper(initStore);

export default wrapper;
