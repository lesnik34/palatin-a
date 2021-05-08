import rootReducer from './slices/rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

const initStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [ thunk ]
    })
}

const wrapper = createWrapper(initStore);

export default wrapper;
