import { login, logout } from "../Presentation/Redux/Reducers/userReducer";
import axios from "../Utils/ConfigAxios";
import errorHandler from "../Utils/ControlError";
import { localStorage } from "./LocalStorageAdapter";

async  function getServicio  ()  {
  try {
    let response= await axios.get("/servicios");
    console.log("serBACK ",response.data.servicios);
    return response.data.servicios;
  } catch (error) {
    console.log("serBACK ERR" + e.message);
    throw errorHandler(error)
  }
}
export const  servicioAdapter={
    getServicio
}



