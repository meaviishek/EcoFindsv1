import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const API_URL = "https://api.ixbooking.in/api/v0.1/user/";
const API_URL = "http://localhost:5000/api/user/";

export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${API_URL}check-auth`, { withCredentials: true });
      if (response.data.isAuthenticated) {
        dispatch(getData()); // Fetch user data if authenticated
      }
      return { status: response.status, data: response.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
  





  export const generateOtp = createAsyncThunk("auth/generateOtp", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}generate-otp`, data, { withCredentials: true });
      return {
        status: response.status,
        data: response.data,
        message: response.data?.message || "Success",
      };
    } catch (err) {
      return rejectWithValue({
        status: err.response?.status || 500,
        data: err.response?.data || null,
        message: err.response?.data?.message || "Something went wrong",
      });
    }
  });
  
  export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}verify-otp`, data, { withCredentials: true });
      return {
        status: response.status,
        data: response.data,
        message: response.data?.message || "Success",
      };
    } catch (err) {
      return rejectWithValue({
        status: err.response?.status || 500,
        data: err.response?.data || null,
        message: err.response?.data?.message || "Something went wrong",
      });
    }
  });

export const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}register`, data);
      return { status: response.status, data: response.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
  
  export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}login`, data, { withCredentials: true });
      return { status: response.status, data: response.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });

  export const getData = createAsyncThunk("auth/getData", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}me`, {  withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });

  export const logoutUser = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}logOut`,{}, {  withCredentials: true });
  
      return response.message;
  
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });






  const initialState = {
    user: null,
    isAuthenticated: false,
    loading:false,
    message: null,
    error: null,
    errordata:null
  };
  
  // Auth Slice
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        // Handle Login
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        //check-auth
        .addCase(checkAuth.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = action.payload.isAuthenticated;
        })
        .addCase(checkAuth.rejected, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.user = null;
          state.error = action.payload;
        })
  
        // Handle Get Data
        .addCase(getData.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getData.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        })
        .addCase(getData.rejected, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.user = null;
          state.errordata = action.payload;
        })
  
        // Handle Logout
        .addCase(logoutUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.user = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        //forget
      
   // Generate OTP
    .addCase(generateOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(generateOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.otpSent = true;
      state.message = action.payload.message;
    })
    .addCase(generateOtp.rejected, (state, action) => {
      state.loading = false;
      state.otpSent = false;
      state.error = action.payload;
    })

    // Verify OTP
    .addCase(verifyOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.otpVerified = true;
      state.message = action.payload.message;
    })
    .addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.otpVerified = false;
      state.error = action.payload;
    })


     //send otp forgot
    // .addCase(sendOtpForgot.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(sendOtpForgot.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(sendOtpForgot.rejected, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = false;
    //   state.error = action.payload;
    // })




    // Register User
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.message=action.payload.message;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

 


 
      
       
    },
  });
  





  export default authSlice.reducer;

