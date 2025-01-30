// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Products", "Categories", "Profile"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/users/register`,
          method: "POST",
          body: userData,
        };
      },
    }),
    addCategory: builder.mutation({
      query: ({ categoryData }) => {
        return {
          url: `/category`,
          method: "POST",
          body: categoryData,
        };
      },
      invalidatesTags: ["Categories"],
    }),
    addProduct: builder.mutation({
      query: ({ productData }) => {
        return {
          url: `/products`,
          method: "POST",
          body: productData,
        };
      },
      invalidatesTags: ["Products"],
    }),
    loginUser: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: userData,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/users/profile`,
          method: "PUT",
          body: userData,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    deleteProduct: builder.mutation({
      query: ({ productId }) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Products"],
    }),
    deleteCategory: builder.mutation({
      query: ({ categoryId }) => {
        return {
          url: `/category/${categoryId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Categories"],
    }),
    getProduct: builder.query({
      query: () => {
        return `/products`;
      },
      providesTags: ["Products"],
    }),
    getProfile: builder.query({
      query: () => {
        return `/auth/profile`;
      },
      providesTags: ["Profile"],
    }),
    getSingleProduct: builder.query({
      query: ({ productId }) => {
        return `/products/${productId}`;
      },
    }),
    getCategories: builder.query({
      query: () => {
        return `/category`;
      },
      providesTags: ["Categories"],
    }),
    getSingleCategories: builder.query({
      query: ({ categoryId }) => {
        console.log(categoryId);
        return `/category/${categoryId}`;
      },
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useAddCategoryMutation,
  useAddProductMutation,
  useDeleteCategoryMutation,
  useDeleteProductMutation,
  useGetProfileQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
  useGetSingleCategoriesQuery,
} = baseApi;
