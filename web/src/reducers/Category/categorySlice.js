import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/config";

// **Create a category**
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", categoryData.name);
      formData.append("description", categoryData.description);
      if (categoryData.image) {
        formData.append("image", categoryData.image); // Include image if provided
      }
      formData.append("userId", categoryData.userId);

      const response = await axios.post("/category/new-category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data; // Assuming the backend returns the created category
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Update a category**
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", categoryData.name);
      formData.append("description", categoryData.description);
      if (categoryData.image) {
        formData.append("image", categoryData.image); // Include new image if provided
      }
      formData.append("user_id", categoryData.userId); // Correct userId key

      const response = await axios.put(`/category/update-category/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return { id, ...response.data }; // Assuming the backend returns the updated category
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


// **Fetch all categories**
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

// **Delete a category**
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/category/delete-category/${id}`);
      return id; // Return the ID of the deleted category
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Category Slice**
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
      })

      // Update Category
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex((cat) => cat.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Category
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter((cat) => cat.id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
