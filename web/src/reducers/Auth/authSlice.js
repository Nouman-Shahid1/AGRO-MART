import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";
import { setCookie, getCookie, deleteCookie } from "../../utilities/utils";

const isBrowser = typeof window !== "undefined";

const initialState = {
  user: isBrowser
    ? (() => {
        try {
          const rawUser = localStorage.getItem("user");
          return rawUser && rawUser !== "undefined"
            ? JSON.parse(rawUser)
            : null;
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
          return null;
        }
      })()
    : null,
  userRole: isBrowser ? localStorage.getItem("userRole") || null : null,
  accessToken: getCookie("access_token") || null,
  users: [],
  loading: false,
  error: null,
  isSuccess: false,
  loggedOut: false,
};

// Thunk to log in a user
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", { email, password });
      const { token, user, role } = response.data;

      if (isBrowser) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userRole", role);
      }

      setCookie("access_token", token, 1); // Set cookie for 1 day

      return { accessToken: token, user, userRole: role };
    } catch (err) {
      console.error("Error response from backend during login:", err.response);
      return rejectWithValue(
        err.response?.data || { message: "Login failed. Please try again." }
      );
    }
  }
);

// Thunk to register a user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", userData);
      const { user, role, token } = response.data;

      if (isBrowser) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userRole", role);
        localStorage.setItem("access_token", token);
      }

      setCookie("access_token", token, 1);

      return { user, userRole: role, accessToken: token };
    } catch (err) {
      console.error(
        "Error response from backend during registration:",
        err.response
      );
      return rejectWithValue(
        err.response?.data || { message: "Registration failed" }
      );
    }
  }
);

// Thunk to fetch all users
export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (err) {
      console.error("Error fetching users:", err.response);
      return rejectWithValue(
        err.response?.data || { message: "Failed to fetch users." }
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      console.log("Updating user:", { userId, userData }); // Log the request
      const response = await axios.put(`/users/${userId}`, userData);
      console.log("Update response:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error updating user:", err);
      return rejectWithValue(
        err.response?.data || { message: "Failed to update user." }
      );
    }
  }
);

// Thunk to delete a user
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${userId}`);
      return userId; // Returning userId to identify the deleted user in the reducer
    } catch (err) {
      console.error("Error deleting user:", err.response);
      return rejectWithValue(
        err.response?.data || { message: "Failed to delete user." }
      );
    }
  }
);

// Thunk to log out a user
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    deleteCookie("access_token");

    if (isBrowser) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");
    }

    dispatch(authSlice.actions.clearState());
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.userRole = action.payload.userRole;
    },
    clearState: (state) => {
      state.user = null;
      state.userRole = null;
      state.accessToken = null;
      state.loading = false;
      state.error = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.userRole = action.payload.userRole;
        state.accessToken = action.payload.accessToken;
        state.isSuccess = true;
        state.loggedOut = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.userRole = action.payload.userRole;
        state.accessToken = action.payload.accessToken;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedIndex = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.users[updatedIndex] = {
            ...state.users[updatedIndex],
            ...action.payload,
          };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.userRole = null;
        state.accessToken = null;
        state.loggedOut = true;
      });
  },
});

export const { setToken, setUser, clearState } = authSlice.actions;
export default authSlice.reducer;
