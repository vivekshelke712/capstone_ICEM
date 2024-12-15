import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/admin' }),
    tagTypes: ["jobs","users"],
    endpoints: (builder) => {
        return {
            
        
            getAllUser:builder.query({
                query : userData => {
                    return {
                        url:'/getAllUsers',
                        method: "GET",

                    }
                },
                transformResponse : data => data.result,
                providesTags :["users"]
            })
            ,
            getAllRequestAdmin:builder.query({
                query : userData => {
                    return {
                        url:'/getAllRequestAdmin',
                        method: "GET",

                    }
                },
                transformResponse : data => data.result,
                providesTags :["users"]
            })
        
        }
    }
})

export const {  useGetAllUserQuery ,useGetAllRequestAdminQuery} = adminApi
