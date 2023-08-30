import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import {API} from '../../network/api';

export const loginAction = createAsyncThunk(
  'user/login',
  async (data: {username: string; password: string}) => {
    const response = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  },
);

const initialUserState: {token?: string} = {};

const userReducer = createReducer(initialUserState, builder => {
  builder.addCase(loginAction.fulfilled, (state, action) => {
    state.token = action.payload;
  });
});

export default userReducer;
