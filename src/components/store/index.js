import { configureStore } from "@reduxjs/toolkit";
import uiSlce from "./UiSlice";
import cartSlice from "./CartSlice";



const store = configureStore({
    reducer: {
        ui : uiSlce.reducer,
        cart: cartSlice.reducer
    }
})

export default store;