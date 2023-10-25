// src/adapters/ApiAdapter.js

import { login, logout } from "../Presentation/Redux/Reducers/userReducer";
import { localStorage } from "./LocalStorageAdapter";

// Define una función de inicio de sesión que toma dispatch como argumento
async function loginAdapter(dispatch, data) {

  try {
    // peticion con axios aqui
    await localStorage.saveUserData(data);
    dispatch(login(data));
    return data;
  } catch (e) {
    console.log("vac" + e);
  }
}

async function logoutAdapter(dispatch) {

  try {
    //peticion con axios aqui
    localStorage.clearUserData();
    dispatch(logout());
  } catch (error) {

  }

}



export const authAdapter = {
  loginAdapter,
  logoutAdapter
}
