import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode as a named export

const initialState = {
  user: null, // Decoded user information
  token: null, // JWT token
  role: null, // User role from the decoded token
  users: [], // List of users
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", { email, password });
      if (response.status === 200 || response.status === 204) {
        const { accessToken, refreshToken } = response.data;

        // Decode the accessToken
        const decodedToken = jwtDecode(accessToken);

        // Store tokens in localStorage
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);

        return { token: accessToken, user: decodedToken, role: decodedToken.role };
      } else {
        return rejectWithValue({ message: "Unexpected response status." });
      }
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Login failed. Please try again." });
    }
  }
);


// **Thunk to register a user**
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", userData);
      const { token } = response.data;

      // Decode the token
      const decodedToken = jwtDecode(token);

      // Store the token in localStorage
      localStorage.setItem("access_token", token);

      return { token, user: decodedToken, role: decodedToken.role };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Registration failed. Please try again." });
    }
  }
);

// **Thunk to fetch all users**
export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Failed to fetch users." });
    }
  }
);

// **Thunk to update a user**
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/users/${userId}`, userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Failed to update user." });
    }
  }
);

// **Thunk to delete a user**
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${userId}`);
      return userId;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Failed to delete user." });
    }
  }
);

// **Thunk to log out a user**
export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  localStorage.removeItem("access_token");
  dispatch(authSlice.actions.clearState());
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // **Reducer to manually set the token and decode it**
    setToken: (state, action) => {
      state.token = action.payload;
      try {
        const decodedToken = jwtDecode(action.payload);
        state.user = decodedToken;
        state.role = decodedToken.role;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    },
    // **Reducer to clear the state (used during logout)**
    clearState: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.users = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // **Handle login**
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // **Handle registration**
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // **Handle fetching users**
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
        state.error = action.payload.message;
      })

      // **Handle updating a user**
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedIndex = state.users.findIndex((user) => user.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.users[updatedIndex] = { ...state.users[updatedIndex], ...action.payload };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })

      // **Handle deleting a user**
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })

      // **Handle logout**
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
        state.users = [];
      });
  },
});

export const { setToken, clearState } = authSlice.actions;
export default authSlice.reducer;
