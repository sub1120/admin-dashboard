import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../../api/user";
import { IUser, IUserState } from "../../utils/types";
import { normalizeData } from "../../utils/normalize";

const initialState: IUserState = {
  users: {},
  selectedUser: null,
  loading: "idle",
  loadingUser: "idle",
};

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const responseData = await userAPI.getAllUsers();
    return responseData;
  }
);

export const fetchUserByID = createAsyncThunk(
  "users/fetchUserByID",
  async (id: string) => {
    const responseData = await userAPI.getUserById(id);
    return responseData;
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (userDetails: IUser) => {
    const responseData = await userAPI.createUser(userDetails);
    return responseData;
  }
);

export const deleteUserByID = createAsyncThunk(
  "users/deleteUserByID",
  async (id: string) => {
    await userAPI.deleteUserById(id);
    return id;
  }
);

export const updateUserByID = createAsyncThunk(
  "users/updateUserByID",
  async ({ id, updatedData }: { id: string; updatedData: IUser }) => {
    const responseData = await userAPI.updateUserById(id, updatedData);
    return responseData;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add all users to store
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = normalizeData(action.payload);
        state.loading = "succeeded";
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.loading = "failed";
      })

      // get user by id
      .addCase(fetchUserByID.pending, (state) => {
        state.loadingUser = "pending";
      })
      .addCase(fetchUserByID.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.loadingUser = "succeeded";
      })
      .addCase(fetchUserByID.rejected, (state) => {
        state.loadingUser = "failed";
      })

      // add user
      .addCase(addUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const id = action.payload._id;

        state.users[id] = action.payload;
        state.loading = "succeeded";
      })
      .addCase(addUser.rejected, (state) => {
        state.loading = "failed";
      })

      // delete user by id

      .addCase(deleteUserByID.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteUserByID.fulfilled, (state, action) => {
        console.log(action.payload);
        const id = action.payload;

        delete state.users[id];
        state.loading = "succeeded";
      })
      .addCase(deleteUserByID.rejected, (state) => {
        state.loading = "failed";
      })

      // update user by id
      .addCase(updateUserByID.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateUserByID.fulfilled, (state, action) => {
        const id = action.payload._id;

        state.users[id] = action.payload;
        state.loading = "succeeded";
      })
      .addCase(updateUserByID.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default userSlice.reducer;
