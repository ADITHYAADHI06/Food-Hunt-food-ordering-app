
import { createSlice } from "@reduxjs/toolkit";

const cartSclice = createSlice({
    name: "cart",
    initialState: {
        CartItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.CartItems.push(action.payload);
        },
        removeItem: (state) => {
            state.CartItems.pop();
        },
        clearCart: (state) => {
            state.CartItems = [];
        }
    }
})


// export default cartSclice;
export const { addItem, removeItem, clearCart } = cartSclice.actions;

export default cartSclice.reducer;



