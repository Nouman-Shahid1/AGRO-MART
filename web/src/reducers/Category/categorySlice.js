import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/config";

// Create a category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (categoryData, { getState, rejectWithValue }) => {
    try {
      const state = getState(); // Access the Redux state
      const token = state.auth.accessToken; // Get the access token from the auth state

      const formData = new FormData();
      formData.append("name", categoryData.name);
      formData.append("description", categoryData.description);
      formData.append("image", categoryData.image);

      const response = await axios.post("/category/new-category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`, // Include the token in the header
        },
      });

      return response.data.product; // Assuming the response contains a `product` field
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch all categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/getallcategories");
      return response.data; // Assuming the response contains an array of categories
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Category Slice
const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [], // List of categories
    loading: false, // Loading state
    error: null, // Error state
  },
  reducers: {}, // Reducers if needed
  extraReducers: (builder) => {
    builder
      // Create Category
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload); // Add the new category to the state
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; // Update state with fetched categories
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
