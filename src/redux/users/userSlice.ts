import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../../api/user";
import { IUpdateDetails, IUserState } from "../../utils/types";
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

const fetchUserByID = createAsyncThunk(
  "users/fetchUserByID",
  async (id: string) => {
    const responseData = await userAPI.getUserById(id);
    return responseData;
  }
);

const deleteUserByID = createAsyncThunk(
  "users/deleteUserByID",
  async (id: string) => {
    const responseData = await userAPI.deleteUserById(id);
    return responseData;
  }
);

const updateUserByID = createAsyncThunk(
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

      // delete user by id

      .addCase(deleteUserByID.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteUserByID.fulfilled, (state, action) => {
        state.users = normalizeData(action.payload);
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
        state.users = normalizeData(action.payload);
        state.loading = "succeeded";
      })
      .addCase(updateUserByID.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default counterSlice.reducer;
