import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: [], // Estado inicial para el chat
  reducers: {
    // Reducers para manejar los mensajes del chat
  },
});

export const {
  /* exportar acciones aquí */
} = chatSlice.actions;
export default chatSlice.reducer;
