import {createSlice} from '@reduxjs/toolkit';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: [], // Estado inicial para los viajes
  reducers: {
    // Reducers para agregar, eliminar o actualizar viajes
  },
});

export const {
  /* exportar acciones aquí */
} = tripsSlice.actions;
export default tripsSlice.reducer;
