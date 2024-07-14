export interface IUser {
  id: string;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  lastName: string;
  photo: IPhoto;
  role: IRole;
  status: IStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IPhoto {
  id: string;
  path: string;
}

export interface IRole {
  id: string;
  name: string;
}

export interface IStatus {
  id: string;
  name: string;
}
