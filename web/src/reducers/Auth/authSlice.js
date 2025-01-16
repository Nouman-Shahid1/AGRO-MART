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
      console.log("Decoded Token:", decodedToken); // Check for userId or id key
      localStorage.setItem("userId", decodedToken.id || decodedToken.Id);
      
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
  localStorage.removeItem("user_role"); // Clear the role from localStorage
  dispatch(authSlice.actions.clearState());
  window.location.href = "/login"; // Force redirect to the login page
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // **Reducer to manually set the token and decode it**
    setToken: (state, action) => {
      const token = action.payload;
      if (typeof token === "string" && token.trim() !== "") {
        try {
          const decodedToken = jwtDecode(token);
          state.token = token;
          state.role = decodedToken.role || null; // Ensure role is set
        } catch (error) {
          console.error("Error decoding token:", error);
          state.token = null;
          state.role = null;
        }
      } else {
        console.error("Invalid token provided:", token);
        state.token = null;
        state.role = null;
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
        localStorage.setItem("userId", action.payload.user.userId); 
        console.log("User ID from localStorage:", localStorage.getItem("userId"));
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
