import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '../constants/Endpoints';
import { ITire } from '../domain/Tire';
import { ITireModel } from '../domain/TireModel';

export const TIRE_MODEL_API_REDUCER_KEY = 'tireModelApi';
export const tireModelApi = createApi({
  reducerPath: TIRE_MODEL_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getTireModel: builder.query<ITireModel, string>({
      query: (id) => ({ url: `tireModel/${id}` }),
      transformResponse: (response: { data: ITireModel }, meta, arg) =>
        response.data,
    }),
    searchTireModel: builder.query<ITireModel[], string>({
      query: (text) => ({ url: `tireModel/search?text=${text}` }),
    }),
    createModel: builder.mutation<ITireModel, Partial<ITireModel>>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (model) => ({
        url: `tireModel`,
        method: 'POST',
        body: model,
      }),
    }),
  }),
});

export const { useGetTireModelQuery, useSearchTireModelQuery, useCreateModelMutation } = tireModelApi;
