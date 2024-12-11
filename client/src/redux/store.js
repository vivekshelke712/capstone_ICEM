import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./slice/authSlice";
import { adminApi } from "./api/adminApi";

import { orgAPI } from "./api/orgAPI";
import { orgAuthApi } from "./api/orgAuthApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        // [userApi.reducerPath]: userApi.reducer,
        [orgAPI.reducerPath]:orgAPI.reducer,
        [orgAuthApi.reducerPath]:orgAuthApi.reducer,
        // [userApi.reducerPath]: userApi.reducer,
        user:authSlice,
        org:authSlice
    },
    middleware: def => [...def(),authApi.middleware,orgAuthApi.middleware,adminApi.middleware,orgAPI.middleware,]
})

export default reduxStore