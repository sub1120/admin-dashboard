import axiosInstance from "../utils/axiosIntance";
import {
  IUpdateDetails,
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

// delete user by id
const deleteUserById = async (id: string) => {
  const response = await axiosInstance.delete<IUserResponseOne>(`/user/${id}`);
  return response.data.data;
};

// update user by id
const updateUserById = async (id: string, updateDetails: IUpdateDetails) => {
  const response = await axiosInstance.patch<IUserResponseOne>(
    `/user/${id}`,
    updateDetails
  );
  return response.data.data;
};

export const userAPI = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
