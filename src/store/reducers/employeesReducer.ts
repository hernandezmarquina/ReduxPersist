import {createSlice} from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {}, // Estado inicial para el usuario
  reducers: {
    // Reducers para manejar la información del usuario
  },
});

export const {
  /* exportar acciones aquí */
} = employeesSlice.actions;
export default employeesSlice.reducer;
