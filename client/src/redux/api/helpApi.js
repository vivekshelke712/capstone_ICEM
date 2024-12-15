import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HelpApi = createApi({
  reducerPath: "help",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/help" }),
  tagTypes: ["help"],
  endpoints: (builder) => {
    return {
      // Get all help requests by email
      getAllRequesByEmail: builder.query({
        query: (email) => {
          return {
            url: `/getHelpRequestByEmail/${email}`,
            method: "GET",
          };
        },
        transformResponse: (data) => data, // Transform response if needed
        providesTags: ["help"],
      }),
    
      getRequestDetails: builder.query({
        query: (requestId) => {
          return {
            url: `/requests/${requestId}`,
            method: "GET",
          };
        },
        transformResponse: (data) => data, // Transform response if needed
        providesTags: ["help"],
      }),

      // Add a new help request
      addHelpRequest: builder.mutation({
        query: (userData) => {
          return {
            url: "/help-request",
            method: "POST",
            body: userData,
          };
        },
        invalidatesTags: ["help"], // Invalidates the "help" tag to trigger refetching
      }),

      // Update help request status (approve or reject)
      updateHelp: builder.mutation({
        query: ({ id, isApproved }) => {
          return {
            url: `/helpRequests/${id}`,
            method: "PATCH",
            body: { isApproved },
          };
        },
        // Optionally handle invalidating tags here if needed
        // invalidatesTags: ['help']
      }),
    };
  },
});

// Export hooks for components
export const {
  useGetAllRequesByEmailQuery,
  useAddHelpRequestMutation,
  useGetRequestDetailsQuery,
  useUpdateHelpMutation,
} = HelpApi;