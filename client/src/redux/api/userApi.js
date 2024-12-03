import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { getAllJobs } from "../../../../server/controllers/userController"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/user/" }),
    tagTypes: ["userApi"],
    endpoints: (builder) => {
        return {
            getAllJobs: builder.query({
                query: () => {
                    return {
                        url: "/getJobs",
                        method: "GET"
                    }
                },
                transformResponse : data => data.result,
                providesTags: ["userApi"]
            }),
            addResume: builder.mutation({
                query: () => {
                    return {
                        url: "/add-resume",
                        method: "POST"
                    }
                },
                // transformResponse : data => data.result,
                providesTags: ["userApi"]
            }),
            getAllUser: builder.query({
                query: () => {
                    return {
                        url: '/getAllUser',
                        method:"GET"
                    }
                }
            }),


            getJobDetails: builder.query({
             query: jobId => {
             return {
                url: `/getJobDetails/${jobId}`,
                method: "GET",
                 };
    },
    transformResponse: data => data.result,
            }),

      applyForJob: builder.mutation({
      query: ({ jobId, userId }) => ({
        url: '/job-applications',
        method: 'POST',
        body: { jobId, userId },
      }),
      invalidatesTags: ['JobApplications'],
      }),
      
      

            
        
        }
    }
})

export const { useGetAllJobsQuery,useAddResumeMutation,useGetJobDetailsQuery,useApplyForJobMutation } = userApi
