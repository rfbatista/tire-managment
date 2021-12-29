import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '../../constants/Endpoints';

export const AUTH_API_REDUCER_KEY = 'authApi';
export const authApi = createApi({
 reducerPath: AUTH_API_REDUCER_KEY,
 baseQuery: fetchBaseQuery({
   baseUrl: BACKEND_ENDPOINT,
 }),
 endpoints: (builder) => ({
   getAccessToken: builder.query<any, string>({
     query: (code) => {
       return ({
         url: 'github/access_token',
         method: 'POST',
         body: { code }
       });
     },
   }),
 }),
});