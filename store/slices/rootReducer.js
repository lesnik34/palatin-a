import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import contentsSlice from './content';
import settingsSlice from './settings';

const combinedReducer = combineReducers({
    settings: settingsSlice.reducer,
    content: contentsSlice.reducer
});


const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };

        return nextState;
    }
    return combinedReducer(state, action);

};


export default reducer;
