import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orgAuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),
    tagTypes: ["authapi"],
    endpoints: (builder) => {
        return {
            orgRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/orgregister",
                        method: "POST",
                        body:userData
                    }
                },
                providesTags: ["authApi"]
            }),
            orgLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/orglogin",
                        method: "POST",
                        body: userData
                    }
                },
                transformErrorResponse : error => data.message,
                transformResponse: data => {
                     localStorage.setItem("org",JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["authapi"]
            }),
             orgLogout: builder.mutation({
                query: () => {
                    return {
                        url: "/orglogout",
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

export const { useOrgLoginMutation , useOrgLogoutMutation,useOrgRegisterMutation} = orgAuthApi
