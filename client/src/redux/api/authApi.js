import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),
    tagTypes: ["authapi"],
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body:userData
                    }
                },
                providesTags: ["authApi"]
            }),
            login: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformErrorResponse : error => data.message,
                transformResponse: data => {
                     localStorage.setItem("auth",JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["authapi"]
            }),
             logout: builder.mutation({
                query: () => {
                    return {
                        url: "/logout",
                        method: "POST"
                    }
                },
                transformResponse: (data) => {
                    localStorage.removeItem("auth")
                    return data
                },
                invalidatesTags:["authapi"]
               
            }),
        
        }
    }
})

export const { useLoginMutation, useLogoutMutation ,useRegisterMutation} = authApi
