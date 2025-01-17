import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode as a named export

const initialState = {
  user: null,
  token: null,
  role: null,
  users: [],
  loading: false,
  error: null,
};

const loadStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("user_role");
    const userId = localStorage.getItem("userId");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return {
          user: { ...decodedToken, userId }, // Include the user ID from localStorage
          token,
          role,
        };
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }
  return { user: null, token: null, role: null };
};

// Initialize state with persisted data from localStorage
const persistedState = typeof window !== "undefined" ? loadStateFromLocalStorage() : {};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", { email, password });
      if (response.status === 200) {
        const { accessToken } = response.data;
        const decodedToken = jwtDecode(accessToken);

        // Log decoded token details to the console
        console.log("Decoded Token Details:", decodedToken);

        // Store in localStorage
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("user_role", decodedToken.role); // Save the role
        localStorage.setItem("userId", decodedToken.Id); // Save the role

        return { token: accessToken, role: decodedToken.role, user: decodedToken };
      } else {
        return rejectWithValue({ message: "Unexpected response status." });
      }
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Login failed. Please try again." });
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", userData);
      console.log("Backend Response:", response.data); // Debug response

      // Extract user details from the response
      const { event } = response.data;

      if (!event) {
        throw new Error("User details not found in response.");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("userId", event.ID);
        localStorage.setItem("userRole", event.Role);
      }

      return {
        user: {
          id: event.ID,
          email: event.Email,
          username: event.Username,
          role: event.Role,
        },
      };
    } catch (err) {
      console.error("Error Response:", err.response?.data || err.message);
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
  localStorage.removeItem("user_role"); // Clear the role from localStorage
  dispatch(authSlice.actions.clearState());
  window.location.href = "/login"; // Force redirect to the login page
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    ...initialState,
    ...persistedState,
  },

  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          state.token = token;
          state.role = decodedToken.role || null;
          state.user = decodedToken;
        } catch (error) {
          console.error("Error decoding token:", error);
          state.token = null;
          state.role = null;
        }
      }
    },
    
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
