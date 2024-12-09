import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orgAPI = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/org" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getAllOrgnization: builder.query({
                query: () => {
                    return {
                        url: "/getAllOrganizations",
                        method: "GET"
                    }
                },
                transformResponse : data => data.result,
                providesTags: ["tagName"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/apiEndPoint",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["tagName"]
            }),
        
        }
    }
})

export const { useGetAllOrgnizationQuery, useAddUserMutation} = orgAPI
