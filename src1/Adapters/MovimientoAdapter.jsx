import { login, logout } from "../Presentation/Redux/Reducers/userReducer";
import axios from "../Utils/ConfigAxios";
import errorHandler from "../Utils/ControlError";
import { localStorage } from "./LocalStorageAdapter";

async  function registrarMovimiento  (numeroCuenta,data)  {
  try {
    let response= await axios.post("/movimiento/"+numeroCuenta,data);
    console.log("serBACK ",response.data);
    return response.data;
  } catch (error) {
    console.log("serBACK ERR" + e.message);
    throw errorHandler(error)
  }
}

async function obtenerMovimientos(nroCuenta){
  try {
    let resp= await axios.get("/movimiento/"+nroCuenta);
    console.log("respBACK MOV",resp.data.movimientos);
    return resp.data.movimientos;
  } catch (error) {
    console.log("errBACK ",error)
  }

}
export const  movimientoAdapter={
    registrarMovimiento,
    obtenerMovimientos
}



