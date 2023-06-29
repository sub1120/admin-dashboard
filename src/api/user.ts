import axiosInstance from "../utils/axiosIntance";
import {
  IUser,
  IUserResponseMany,
  IUserResponseOne,
} from "../utils/types";

// get all users
const getAllUsers = async () => {
  const response = await axiosInstance.get<IUserResponseMany>("/users");
  return response.data.data;
};

// get user by id
const getUserById = async (id: string) => {
  const response = await axiosInstance.get<IUserResponseOne>(`/user/${id}`);
  return response.data.data;
};

// create user
const createUser = async (userDetails: IUser) => {
  const response = await axiosInstance.post<IUserResponseOne>(
    `/user/create`,
    userDetails
  );
  return response.data.data;
};

// delete user by id
const deleteUserById = async (id: string) => {
  const response = await axiosInstance.delete<IUserResponseOne>(`/user/${id}`);
  return response.data.data;
};

// update user by id
const updateUserById = async (id: string, updateDetails: IUser) => {
  const response = await axiosInstance.patch<IUserResponseOne>(
    `/user/${id}`,
    updateDetails
  );
  return response.data.data;
};

export const userAPI = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
