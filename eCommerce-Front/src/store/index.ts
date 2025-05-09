import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
}
const wishlistPersistConfig = {
    key: "wishlist",
    storage,
    whitelist: ["itemsId"],
}

const rootReducer = combineReducers(
    { categories, products, wishlist: persistReducer(wishlistPersistConfig, wishlist), cart: persistReducer(cartPersistConfig, cart) }
);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


const persistor = persistStore(store);
export { persistor };