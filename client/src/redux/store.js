import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./slice/authSlice";
import { adminApi } from "./api/adminApi";
import { userApi } from "./api/userApi";
import { orgAPI } from "./api/orgAPI";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orgAPI.reducerPath]:orgAPI.reducer,
        // [userApi.reducerPath]: userApi.reducer,
        user:authSlice,
        org:authSlice
    },
    middleware: def => [...def(),authApi.middleware,adminApi.middleware,userApi.middleware,orgAPI.middleware]
})

export default reduxStore