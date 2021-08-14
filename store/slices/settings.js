import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isBurgerMenuVisible: false,

    isDesktop: false,
    isTablet: false,
    isMobile: true,
    isRetina: false
};
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleBurgerMenu: state => {
            state.isBurgerMenuVisible = !state.isBurgerMenuVisible;
        },
        closeBurgerMenu: state => {
            state.isBurgerMenuVisible = false;
        },

        setDesktop: state => {
            state.isDesktop = true;
            state.isTablet = false;
            state.isMobile = false;
        },
        setTablet: state => {
            state.isDesktop = false;
            state.isTablet = true;
            state.isMobile = false;
        },
        setMobile: state => {
            state.isDesktop = false;
            state.isTablet = false;
            state.isMobile = true;
        },
        setRetina: (state, action) => {
            state.isRetina = action.payload;
        }
    }
});
export const {
    toggleBurgerMenu,
    closeBurgerMenu,
    setDesktop,
    setTablet,
    setMobile,
    setRetina
} = settingsSlice.actions;

export default settingsSlice;