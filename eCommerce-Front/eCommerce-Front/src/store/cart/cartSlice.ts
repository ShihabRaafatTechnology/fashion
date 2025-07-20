import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@types";
import actGetProductsByItems from "./act/actGetProductsByItems";

export interface ICartState {
    items: { [key: string]: number };
    productsFullInfo: TProduct[];
    loading: TLoading;
    error: null | string;
}

const initialState: ICartState = {
    items: {},
    productsFullInfo: [],
    loading: "idle",
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]--;
            } else {
                state.items[id] = 0;
            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            delete state.items[id];
            state.productsFullInfo = state.productsFullInfo.filter((el)=> el.id !== action.payload)
        },
        cartProductsFullInfo: (state) =>{
            state.productsFullInfo = [];
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(actGetProductsByItems.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            });

            builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.productsFullInfo = action.payload;
            });

            builder.addCase(actGetProductsByItems.rejected, (state, action) => {
                state.loading = "failed";
                if (isString(action.payload)) {
                    state.error = action.payload;
                }
            });
        }

});


export { actGetProductsByItems };
export const { addToCart, removeFromCart, removeCart, cartProductsFullInfo } = cartSlice.actions;
export default cartSlice.reducer;