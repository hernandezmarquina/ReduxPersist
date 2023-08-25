import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {}, // Estado inicial para el usuario
  reducers: {
    // Reducers para manejar la información del usuario
  },
});

export const {
  /* exportar acciones aquí */
} = userSlice.actions;
export default userSlice.reducer;
