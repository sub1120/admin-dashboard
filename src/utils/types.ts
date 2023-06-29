//Redux state types
export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  age: number;
}

export interface IUserState {
  users: { [id: string]: IUser };
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

// API Reponse types
export interface IUserResponseOne {
  message: string;
  data: IUserResponseData;
}

export interface IUserResponseMany {
  message: string;
  data: [IUserResponseData];
}
