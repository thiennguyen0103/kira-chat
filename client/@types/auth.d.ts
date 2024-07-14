import { IUser } from "./user";

export interface IRegisterPayload extends ILoginPayload {
  firstName: string;
  lastName: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: IUser;
}
