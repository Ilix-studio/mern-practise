import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../auth/authService";
//1
//Redux Toolkit's createSlice and createReducer APIs use Immer inside
//to allow us to write "mutating" update

//3
// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

//getItem() - Returns the value of the specified key name

//2
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//6
//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
);

// create slice requires a slice name to identify the slice,
// an initial state value, and one or more reducer functions
//to define how the state can be updated.
//4
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  //7
  // pending, fulfilled, and rejected attached comes from AsyncThunk
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
      //what we want to do when the register action is pending
      //state loading = true 
      //because it is fetching the data
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      //we got the data
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  },
});
//Once a slice is created,
// we can export the generated Redux action creators
// and the reducer function for the whole slice.
//5
export const { reset } = authSlice.actions;
export default authSlice.reducer;
