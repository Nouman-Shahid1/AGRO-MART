import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create category
export const createCategory = createAsyncThunk(
    "/api/createCategory",
    async(categoryData,{rejectWithValue})=>{
        try {
            const response =await axios.post('/api/categories',categoryData)
            return response.data;    
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// get categories
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// get category by id
export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
//deleter category
export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async (categoryId, { rejectWithValue}) => {
      try {
        const response = await axios.delete(`/api/categories/${categoryId}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  // Slice

const categorySlice = createSlice({
    name: "category",
    initialState: {
      categories: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Create Category
        .addCase(createCategory.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
          state.loading = false;
          state.categories=action.payload;
        })
        .addCase(createCategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Get Categories
        .addCase(getCategories.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Get Category by ID
        .addCase(getCategoryById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getCategoryById.fulfilled, (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        })
        .addCase(getCategoryById.rejected, (state, action) => {
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
          state.categories = action.payload
        })
        .addCase(deleteCategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default categorySlice.reducer;
  