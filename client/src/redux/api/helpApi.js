import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const HelpApi = createApi({
    reducerPath: "help",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/help" }),
    tagTypes: ["help"],
    endpoints: (builder) => {
        return {
            getAllRequesByEmail: builder.query({
                query: (email) => {
                    return {
                        url: `/getHelpRequestByEmail/${email}`,
                        method: "GET"
                    }
                },
                transformResponse : (data) => data,
                providesTags: ["help"]
            }),
            addHelpRequest: builder.mutation({
                query: userData => {
                    return {
                        url: "/help-request",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["help"]
            }),
        
        }
    }
})

export const { useGetAllRequesByEmailQuery, useAddHelpRequestMutation } = HelpApi
