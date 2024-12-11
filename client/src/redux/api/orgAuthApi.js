import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgAuthApi = createApi({
    reducerPath: "orgAuthApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),
    tagTypes: ["authApi"],
    endpoints: (builder) => ({
        orgRegister: builder.mutation({
            query: (userData) => ({
                url: "/orgregister",
                method: "POST",
                body: userData,
            }),
            providesTags: ["authApi"],
        }),
        orgLogin: builder.mutation({
            query: (userData) => ({
                url: "/orglogin",
                method: "POST",
                body: userData,
            }),
            transformResponse: (data) => {
                console.log("Received data:", data); // Check the entire response
                if (data && data.result) {
                    localStorage.setItem("org", JSON.stringify(data.result));
                    return data.result;
                } else {
                    console.error("No 'result' field found in response:", data);
                    return null; // Handle the case where result is missing
                }
            }
            ,
            
            invalidatesTags: ["authApi"],
        }),
        orgLogout: builder.mutation({
            query: () => ({
                url: "/orglogout",
                method: "POST",
            }),
            transformResponse: (data) => {
                localStorage.removeItem("org");
                return data;
            },
            invalidatesTags: ["authApi"],
        }),
    }),
});

// Export hooks for components to use
export const {
    useOrgRegisterMutation,
    useOrgLoginMutation,
    useOrgLogoutMutation,
} = orgAuthApi;
