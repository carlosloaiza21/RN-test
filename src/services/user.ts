import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface User {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6172cfe5110a740017222e2b.mockapi.io/',
  }),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => `elements/`,
    }),
  }),
});

export const {useGetUsersQuery} = userApi;
