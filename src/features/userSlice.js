import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: "covid",
    newsData: null,
  },

  //setSignedIn(false) | payload = false | isSignedIn = false
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setNewsData: (state, action) => {
      state.newsData = action.payload;
    },
  },
});

// Export actions
export const {
  setSignedIn,
  setUserData,
  setSearchInput,
  setNewsData,
} = userSlice.actions;

// Export states
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectSearchInput = (state) => state.user.searchInput;
export const selectNewsData = (state) => state.user.newsData;

// Export reducers
export default userSlice.reducer;
