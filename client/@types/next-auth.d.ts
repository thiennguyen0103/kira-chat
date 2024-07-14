import { IAuthResponse } from "./auth";

declare module "next-auth" {
  interface Session extends IAuthResponse {}

  interface User extends IAuthResponse {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: string;
    refreshToken: string;
    tokenExpires: number;
    user: User;
  }
}
