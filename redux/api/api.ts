import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginResponse } from "../../types/ILoginResponse";
import { ILoginUser } from "../../types/ILoginUser";


export const appAPI = createApi({
  reducerPath: "appAPI",
  tagTypes: ["USERS"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://blend-bridge-backend.vercel.app/api/v1" }),
  endpoints: (builder) => ({
   
    loginUser: builder.mutation<ILoginResponse, ILoginUser>({
        query: (loginDetails) => ({
            url: `/auth/login`,
            method: "POST",
            body: JSON.stringify(loginDetails), 
            headers: {
              "Content-Type": "application/json",
            },
          }),
    }),
   
  }),
});

export const {
  useLoginUserMutation,
} = appAPI;
