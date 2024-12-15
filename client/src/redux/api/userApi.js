
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/user" }),  // Updated to your backend API
    tagTypes: ["userApi"],
    endpoints: (builder) => ({
        getUserRequests: builder.query({
            query: (userId) => ({
                url: `/requests/${userId}`, // This should match the backend route
                method: "GET",
            }),
            
            transformResponse: (data) => data, // Transform response if needed
            providesTags: ["userApi"],
        }),
        addUser: builder.mutation({
            query: (userData) => ({
                url: "/apiEndPoint",  // Adjust endpoint for user creation
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["user"],  // You can adjust this tag based on needs
        }),
    }),
});

export const { useGetUserRequestsQuery } = userApi;
