import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '../constants/Endpoints';
import { ITire } from '../../api/src/domain/entities/Tire';

export const TIRE_API_REDUCER_KEY = 'tireApi';
export const tireApi = createApi({
  reducerPath: TIRE_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getTire: builder.query<ITire, string>({
      query: (id) => ({ url: `tire/${id}` }),
      transformResponse: (response: { data: ITire }, meta, arg) =>
        response.data,
    }),
  }),
});

export const { useGetTireQuery } = tireApi;
