/* // userReducer.js
const initialState = {
  user: null, // Inicialmente no hay usuario autenticado
};

const userReducer = (state = initialState, action) => {
  console.log("userReducer ",action.type);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload, // Actualiza el usuario en el estado
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null, // Borra el usuario al cerrar sesión
      };
    default:
      return state;
  }
};

export default userReducer; */

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  userToken: null,
  cliente:null,
  cuenta:null,
};



export const userSlices = createSlice({
  name: "user",// nombre al que hace referencia al usar selectores
  initialState,
  reducers: {
    login: (state, action) => {
      const { user,token ,cliente,cuenta} = action.payload;
      state.user = user;// alamcena en el state lo que recibe desde la vista
      state.userToken = token;
      state.cliente=cliente;
      state.cuenta=cuenta;

    },
    logout: (state) => {
      state.user = null;
      state.userToken = null;
      state.cliente=null;
      state.cuenta=null;
    },
    restoreToken: (state, action) => {
      const { user, token,cliente,cuenta } = action.payload;
      state.user = user;// alamcena en el state lo que recibe desde la vista
      state.userToken = token;
      state.cliente=cliente;
      state.cuenta=cuenta;
    }

  }
})


export const { login, logout,restoreToken } = userSlices.actions;
export default userSlices.reducer