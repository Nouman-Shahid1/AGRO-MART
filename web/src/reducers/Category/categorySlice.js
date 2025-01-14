import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/config";

// Create a category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", categoryData.name);
      formData.append("description", categoryData.description);
      formData.append("image", categoryData.image);
      formData.append("user_id", categoryData.user_id); // Add user_id to FormData

      const response = await axios.post("/category/new-category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.product; // Assuming response contains a `product` field
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
      return response.data; // Assuming response contains an array of categories
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

      // Fetch All Categories
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