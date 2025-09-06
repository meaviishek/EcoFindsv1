import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products/"; // adjust route prefix

// 📌 CREATE Product
export const createProduct = createAsyncThunk(
  "products/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}add`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }, // since images
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 GET All Products
export const getProducts = createAsyncThunk(
  "products/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}get`);
      return response.data.products;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 GET Single Product by ID
export const getProductById = createAsyncThunk(
  "products/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}get/${id}`);
      return response.data.product;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 UPDATE Product
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}update/${id}`, data, {
        withCredentials: true,
      });
      return response.data.product;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 DELETE Product
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}delete/${id}`, { withCredentials: true });
      return id; // return deleted product ID
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  message: null,
};

// 📌 Product Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload.product);
        state.message = "Product created successfully";
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET ALL
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET BY ID
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
        state.message = "Product updated successfully";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== action.payload);
        state.message = "Product deleted successfully";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = productSlice.actions;
export default productSlice.reducer;
