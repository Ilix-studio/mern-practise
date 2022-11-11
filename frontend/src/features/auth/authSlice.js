import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
export const register = createAsyncThunk('auth/register', async() => {})


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
  extraReducers: () => {},
});
//Once a slice is created, 
// we can export the generated Redux action creators
// and the reducer function for the whole slice.
//5
export const { reset } = authSlice.actions;
export default authSlice.reducer;
