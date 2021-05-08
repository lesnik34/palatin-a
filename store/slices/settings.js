import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isBurgerMenuVisible: false
}
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleBurgerMenu: state => {
            state.isBurgerMenuVisible = !state.isBurgerMenuVisible;
        }
    }
})
export const {
    toggleBurgerMenu
} = settingsSlice.actions;

export default settingsSlice;