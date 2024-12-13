import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create product
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (formData, { rejectWithValue }) => {
        try {
            const respone = await axios.post("/api/products", formData)
            return respone.data;
        } catch (error) {
            return rejectWithValue(error.respone?.data?.message || error.message)
        }
    }
)

//get product
export const getProducts = createAsyncThunk(
    "/api/getProducts",
    async (_, { rejectWithValue }) => {
        try {
            const respone = await axios.get("/api/Products")
            return response.data;
        } catch (error) {
            return rejectWithValue(error.respone?.data?.message || error.message)
        }
    }
)

// get Products by id
export const getProductById = createAsyncThunk(
    "/api/getProductById",
    async (id, { rejectWithValue }) => {
        try {
            const respone = await axios.get(`/api/products/${id}`)
            return respone.data;
        } catch (error) {
            return rejectWithValue(error.respone?.data?.message || error.messgae)
        }
    }
)
// edit product 
// export const updateProduct = createAsyncThunk(
//     "/api/updateProduct",
//     async()
// )



// delete products 
export const delProduct = createAsyncThunk(
    "/api/delProduct",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/api/products/${productId}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.respone?.data?.message || error.message)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //createProduct
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            //get product
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload;
                state.error = null
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            })
            //get product by id
            .addCase(getProductById.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
                state.error = null;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
                  // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    }
})