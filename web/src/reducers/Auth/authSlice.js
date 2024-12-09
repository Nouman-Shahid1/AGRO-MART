import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";
import { setCookie, getCookie, deleteCookie } from "../../utilities/utils";

const isBrowser = typeof window !== "undefined";

const initialState = {
  user: isBrowser ? JSON.parse(localStorage.getItem("user")) || null : null,
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
      const { token } = response.data;

      setCookie("access_token", token, 24 * 60 * 60);
      if (isBrowser) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userRole", response.data.user.role);
      }

      return {
        accessToken: token,
        user: response.data.user,
        userRole: response.data.user.role,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Login failed" });
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", userData);
      const { message, event } = response.data;

      if (isBrowser) {
        localStorage.setItem("user", JSON.stringify(event));
        localStorage.setItem("userRole", event.role);
      }

      return { user: event, userRole: event.role, message };
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { message: "Registration failed" }
      );
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/user/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { message: "Fetching user failed" }
      );
    }
  }
);

export const updateUserRole = createAsyncThunk(
  "auth/updateUserRole",
  async ({ id, role }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/user/${id}`, { role });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { message: "Updating user role failed" }
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

    dispatch(authSlice.actions.setLoggedOut(true));
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

      if (isBrowser) {
        localStorage.removeItem("user");
        localStorage.removeItem("userRole");
      }
    },
    setLoggedOut: (state, action) => {
      state.loggedOut = action.payload;
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
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        if (state.user?.id === action.payload.id) {
          state.userRole = action.payload.role;
        }
      });
  },
});

export const { setToken, setUser, clearState, setLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
