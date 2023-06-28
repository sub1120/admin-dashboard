import axiosInstance from "../utils/axiosIntance";
import { IUpdateDetails, IUserReponse } from "../utils/types";

// get all users
const getAllUsers = async () => {
  const response = await axiosInstance.get<IUserReponse>("/users");
  return response.data.data;
};

// get user by id
const getUserById = async (id: string) => {
  const response = await axiosInstance.get<IUserReponse>(`/user/${id}`);
  return response.data.data;
};

// delete user by id
const deleteUserById = async (id: string) => {
  const response = await axiosInstance.delete<IUserReponse>(`/user/${id}`);
  return response.data.data;
};

// update user by id
const updateUserById = async (id: string, updateDetails: IUpdateDetails) => {
  const response = await axiosInstance.patch<IUserReponse>(
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
