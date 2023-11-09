import { createSlice } from "@reduxjs/toolkit";

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    findMatchData: {
      findMatchCountdown: 180000,
    },
    matchData: {},
    connectionState: undefined,
    questionsData: {},
  },
  reducers: {
    setFindMatchData: (state, action) => {
      state.findMatchData = action.payload;
    },
    setMatchData: (state, action) => {
      state.matchData = action.payload;
    },
    setConnectionState: (state, action) => {
      state.connectionState = action.payload;
    },
    setQuestionsData: (state, action) => {
      state.questionsData = action.payload;
    },
  },
});

export const {
  setFindMatchData,
  setMatchData,
  setConnectionState,
  setQuestionsData,
} = triviaSlice.actions;
export default triviaSlice.reducer;
