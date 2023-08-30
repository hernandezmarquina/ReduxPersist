import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import {API} from '../../network/api';

export const getEmployeesAction = createAsyncThunk(
  'employees/getAll',
  async () => {
    const response = await fetch(`${API}/users`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    return data.users;
  },
);

const initialState: {employees?: any[]} = {};

const employeesReducer = createReducer(initialState, builder => {
  builder.addCase(getEmployeesAction.fulfilled, (state, action) => {
    state.employees = action.payload;
  });
});

export default employeesReducer;
