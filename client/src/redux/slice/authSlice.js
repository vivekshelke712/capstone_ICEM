import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { orgAuthApi } from "../api/orgAuthApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: (() => {
            try {
                return JSON.parse(localStorage.getItem("auth")) || null;
            } catch {
                return null;
            }
        })(),
        org: (() => {
            try {
                return JSON.parse(localStorage.getItem("org")) || null;  // Correct key for org
            } catch {
                return null;
            }
        })(),
    },
    
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
                state.user = payload;
            })
            .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
                state.user = null;
            })
            .addMatcher(orgAuthApi.endpoints.orgLogin.matchFulfilled, (state, { payload }) => {
                state.org = payload;
            })
            .addMatcher(orgAuthApi.endpoints.orgLogout.matchFulfilled, (state) => {
                state.org = null;
            }),
});

export default authSlice.reducer;
