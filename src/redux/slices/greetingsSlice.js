import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export const { setGreeting } = greetingsSlice.actions;

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/greetings/random');
    dispatch(setGreeting(response.data.greeting));
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};

export default greetingsSlice.reducer;
