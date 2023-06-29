import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../../api/user";
import { IUpdateDetails, IUser, IUserState } from "../../utils/types";
import { normalizeData } from "../../utils/normalize";

const initialState: IUserState = {
  users: {},
  selectedUser: null,
  loading: "idle",
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
    const responseData = await userAPI.deleteUserById(id);
    return id;
  }
);

export const updateUserByID = createAsyncThunk(
  "users/updateUserByID",
  async ({ id, updatedData }: { id: string; updatedData: IUpdateDetails }) => {
    const responseData = await userAPI.updateUserById(id, updatedData);
    return responseData;
  }
);

export const counterSlice = createSlice({
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
        state.loading = "pending";
      })
      .addCase(fetchUserByID.fulfilled, (state, action) => {
        //  state.selectedUser = normalizeData(action.payload);
        state.loading = "succeeded";
      })
      .addCase(fetchUserByID.rejected, (state) => {
        state.loading = "failed";
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
        state.users = {};
        state.loading = "succeeded";
      })
      .addCase(updateUserByID.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default counterSlice.reducer;
