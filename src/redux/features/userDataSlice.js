import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userdata",
  initialState: {
    userData: {},
    userStats: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserStats: (state, action) => {
      state.userStats = action.payload;
    },
  },
});

export const { setUserData, setUserStats } = userDataSlice.actions;
export default userDataSlice.reducer;
