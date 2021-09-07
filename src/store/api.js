import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeRestApi = createApi({
  reducerPath: "fakerestapi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "/posts" }),
  }),
});

export const { useGetPostsQuery } = fakeRestApi;
export default fakeRestApi;
