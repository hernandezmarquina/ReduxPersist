import {createSlice} from '@reduxjs/toolkit';

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState: [], // Estado inicial para las promociones
  reducers: {
    // Reducers para agregar, eliminar o actualizar promociones
  },
});

export const {
  /* exportar acciones aquí */
} = promotionsSlice.actions;
export default promotionsSlice.reducer;
