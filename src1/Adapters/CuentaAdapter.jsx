import { login, logout } from "../Presentation/Redux/Reducers/userReducer";
import axios from "../Utils/ConfigAxios";
import errorHandler from "../Utils/ControlError";
import { localStorage } from "./LocalStorageAdapter";


async function obtenerCuentaPorID(id_cuenta){
  try {
    let resp=await axios.get("/cuenta-bancaria/"+id_cuenta);
    console.log("res BACK ",resp.data.cuentaBancaria);
    return resp.data.cuentaBancaria;
  } catch (error) {
    console.log("errBACK ",error)
  }
}

export const cuentaAdapter=
{
    obtenerCuentaPorID,
}