import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '../constants/Endpoints';
import { ITireBrand } from '../domain/TireBrand';

export const TIRE_BRAND_API_REDUCER_KEY = 'tireBranApi';
export const tireBrandApi = createApi({
  reducerPath: TIRE_BRAND_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getAllTireBrands: builder.query<ITireBrand[], void>({
      query: () => ({ url: `tireBrand` }),
    }),
  }),
});

export const { useGetAllTireBrandsQuery } = tireBrandApi;
