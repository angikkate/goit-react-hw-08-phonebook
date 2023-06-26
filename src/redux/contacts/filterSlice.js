import { createSlice } from '@reduxjs/toolkit';
//import { logOut } from 'redux/auth/auth-operations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;