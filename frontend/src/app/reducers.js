import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  success:null,
  failure:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
        return{
             ...state,   
            loading: true,
        }
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.user;
      state.success = action.payload.message;
      console.log(action.payload);
      console.log(action.payload.success);
      console.log(action.payload.message);
    },
    loginFail: (state,action) => {
      console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = null;
      console.log(action.payload.message);
      console.log(action.payload.success);
      state.failure = action.payload.message;
    },

    clearMsgs:(state)=>{
      state.success = null;
      state.failure = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess , loginFail ,clearMsgs} = userSlice.actions;

export default userSlice.reducer;
