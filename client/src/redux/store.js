import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./slice/authSlice";
import { adminApi } from "./api/adminApi";

import { orgAPI } from "./api/orgAPI";
import { orgAuthApi } from "./api/orgAuthApi";
import { HelpApi } from "./api/helpApi";
import { userApi } from "./api/userApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [HelpApi.reducerPath]: HelpApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orgAPI.reducerPath]:orgAPI.reducer,
        [orgAuthApi.reducerPath]:orgAuthApi.reducer,
        // [userApi.reducerPath]: userApi.reducer,
        user:authSlice,
        org:authSlice
    },
    middleware: def => [...def(),authApi.middleware,HelpApi.middleware,orgAuthApi.middleware,adminApi.middleware,orgAPI.middleware,userApi.middleware]
})

export default reduxStore