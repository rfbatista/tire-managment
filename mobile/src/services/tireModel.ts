import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '../constants/Endpoints';
import { ITire } from '../domain/Tire';

export const TIRE_MODEL_API_REDUCER_KEY = 'tireApi';
export const tireModelApi = createApi({
  reducerPath: TIRE_MODEL_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getTireModel: builder.query<ITire, string>({
      query: (id) => ({ url: `tireModel/${id}` }),
      transformResponse: (response: { data: ITire }, meta, arg) =>
        response.data,
    }),
    searchTireModel: builder.query<ITire, string>({
      query: (id) => ({ url: `tireModel/${id}` }),
      transformResponse: (response: { data: ITire }, meta, arg) =>
        response.data,
    }),
  }),
});

export const { useGetTireModelQuery, useSearchTireModelQuery } =
  tireModelApi;
