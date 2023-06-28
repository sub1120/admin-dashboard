import axiosInstance from "../utils/axiosIntance";

interface IUpdateDetails {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
  age?: number;
}

// get all users
export const getAllUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

// get user by id
export const getUserById = async (id: string) => {
  const res = await axiosInstance.get(`/user/${id}`);
  return res.data;
};

// delete user by id
export const deleteUserById = async (id: string) => {
  const res = await axiosInstance.delete(`/user/${id}`);
  return res.data;
};

// update user by id
export const updateUserById = async (
  id: string,
  updateDetails: IUpdateDetails
) => {
  const res = await axiosInstance.patch(`/user/${id}`, updateDetails);
  return res.data;
};
