import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/cart/"; // adjust route prefix

// 📌 ADD TO CART
export const addToCart = createAsyncThunk(
  "cart/add",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}add`, product, {
        withCredentials: true,
      });
      return response.data.cart; // return updated cart
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 GET CART
export const getCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}get`, {
        withCredentials: true,
      });
      return response.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 REMOVE ITEM FROM CART
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}remove/${productId}`, {
        withCredentials: true,
      });
      return response.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 UPDATE QUANTITY
export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}update/${productId}`,
        { quantity },
        { withCredentials: true }
      );
      return response.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// 📌 CLEAR CART
export const clearCart = createAsyncThunk(
  "cart/clear",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}clear`, {
        withCredentials: true,
      });
      return response.data.cart; // should return []
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
  message: null,
};

// 📌 Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ADD
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.message = "Item added to cart";
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REMOVE
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.message = "Item removed from cart";
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE QUANTITY
      .addCase(updateCartQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.message = "Cart updated";
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CLEAR
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [];
        state.message = "Cart cleared";
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = cartSlice.actions;
export default cartSlice.reducer;
