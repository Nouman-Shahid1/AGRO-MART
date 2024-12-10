import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";
import { setCookie, getCookie, deleteCookie } from "../../utilities/utils";

const isBrowser = typeof window !== "undefined";

const initialState = {
  user: isBrowser
    ? (() => {
        try {
          const rawUser = localStorage.getItem("user");
          console.log("Raw user data from localStorage:", rawUser);

          // Return parsed user if valid JSON or null if invalid
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
  loading: false,
  error: null,
  loggedOut: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", { email, password });

      const { token, user, role } = response.data;

      // Save token and user details in localStorage
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.userRole = action.payload.userRole;
        state.accessToken = action.payload.accessToken;
        state.loggedOut = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.userRole = action.payload.userRole;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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
