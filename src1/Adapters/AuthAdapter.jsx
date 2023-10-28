// src/adapters/ApiAdapter.js


import { login, logout } from "../Presentation/Redux/Reducers/userReducer";
import axios from "../Utils/ConfigAxios";
import errorHandler from "../Utils/ControlError";
import { localStorage } from "./LocalStorageAdapter";

// Define una función de inicio de sesión que toma dispatch como argumento
async function loginAdapter(dispatch, data) {

  try {
    // peticion con axios aqui
    
    console.log("local save ", data);
    let response = await axios.post("/verificar-password", data);

    console.log("resp ", response.data);
     await localStorage.saveUserData(response.data);
     dispatch(login(response.data));
 
     return data;

  } catch (e) {
    console.log("vac" + e.message);
    throw errorHandler(e)
  
  }
}

async function SingUpdapter(data) {

  try {
    // peticion con axios aqui
    console.log("local save ", data);
    let response=await axios.post("/user",{...data,tipo:"cliente",estado:"activo"});

       console.log("response ",response.data);
    // await localStorage.saveUserData(data);
    // dispatch(login(data));

    return response.data;

  } catch (e) {
    console.log("vac" + e.message);
    throw errorHandler(e)
  }
}

async function logoutAdapter(dispatch) {

  try {
    //peticion con axios aqui
    /* let response = await axios.post("/logout");
    console.log("cierre ",response.data); */
    localStorage.clearUserData();
    dispatch(logout());
  } catch (error) {
    console.log("err back",error)
       throw errorHandler(error)
  }

}



export const authAdapter = {
  loginAdapter,
  SingUpdapter,
  logoutAdapter
}
