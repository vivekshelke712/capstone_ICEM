import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/` }),
    tagTypes: ["jobs","user"],
    endpoints: (builder) => {
        return {
            
            addjob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/jobPost",
                        method: "POST",
                        body: jobData
                    }
                },
                transformResponse : data => data.result,
                invalidatesTags: ["jobs"]
            }),
            getAllUser:builder.query({
                query : userData => {
                    return {
                        url:'/getAlluser',
                        method: "GET",

                    }
                },
                transformResponse : data => data.result,
                providesTags :["users"]
            })
            
        
        }
    }
})

export const { useAddjobMutation ,useGetAllUserQuery} = adminApi
