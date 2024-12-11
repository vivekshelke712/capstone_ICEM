import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),
    tagTypes: ["authApi"],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData,
            }),
            providesTags: ["authApi"],
        }),
        login: builder.mutation({
            query: (userData) => ({
                url: "/login",
                method: "POST",
                body: userData,
            }),
            transformErrorResponse: (error) => error.data.message,
            transformResponse: (data) => {
                localStorage.setItem("auth", JSON.stringify(data.result));
                return data.result;
            },
            invalidatesTags: ["authApi"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
            transformResponse: (data) => {
                localStorage.removeItem("auth");
                return data;
            },
            invalidatesTags: ["authApi"],
        }),
    }),
});

// Export hooks for components to use
export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
} = authApi;
