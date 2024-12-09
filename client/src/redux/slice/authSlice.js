import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { orgAuthApi } from "../api/orgAuthApi";

const authSlice= createSlice({
    name: "authSlice",
    initialState: {
        user:JSON.parse(localStorage.getItem("auth")),
        org:JSON.parse(localStorage.getItem("org"))
    },
    reducers: {
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })
        .addMatcher(orgAuthApi.endpoints.orgLogin.matchFulfilled, (state, { payload }) => {
            state.org = payload
        })
        .addMatcher(orgAuthApi.endpoints.orgLogout.matchFulfilled, (state, { payload }) => {
            state.org = null
        })
        
       
})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer