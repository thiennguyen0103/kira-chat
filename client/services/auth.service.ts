import { IAuthResponse, ILoginPayload, IRegisterPayload } from "@/@types/auth";
import ApiClient from "@/configs/api-client";

export const authService = {
  login: async (payload: ILoginPayload) => {
    const response = await ApiClient.post<IAuthResponse>(
      "/v1/auth/email/login",
      payload,
    );

    return response;
  },
  register: async (payload: IRegisterPayload) => {
    const response = await ApiClient.post<IAuthResponse>(
      "/v1/auth/email/register",
      payload,
    );

    return response;
  },
};
