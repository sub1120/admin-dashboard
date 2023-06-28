//Redux state types
export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  age: number;
}

export interface IUserState {
  users: { [id: string]: IUser } | {};
  selectedUser: IUser | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface IUpdateDetails {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
  age?: number;
}

// API Reponse types
export interface IUserResponseData {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  age: number;
}

export interface IUserReponse {
  message: string;
  data: IUserResponseData | [IUserResponseData];
}
