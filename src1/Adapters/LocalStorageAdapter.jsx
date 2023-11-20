// storage.js
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { config } from '../Config';



 async function saveUserData(userData) {
  
  try {
    await setItemAsync(config.USER_KEY, JSON.stringify(userData.user));
    await setItemAsync(config.USER_CLIENTE, JSON.stringify(userData.cliente));
    await setItemAsync(config.USER_CUENTA, JSON.stringify(userData.cuenta));
    await setItemAsync(config.USER_TOKEN_KEY, userData.token);
  } catch (error) {
    console.error('Error al guardar los datos del usuario de manera local:', error);
  }
};

 const loadUserData = async () => {
  try {
    const userData = await getItemAsync(config.USER_KEY);
    const userCliente = await getItemAsync(config.USER_CLIENTE);
    const userCuenta = await getItemAsync(config.USER_CUENTA);
    const UserTokenKey=await getItemAsync(config.USER_TOKEN_KEY);

    if (userData && UserTokenKey) {
      return {user:JSON.parse(userData),token:UserTokenKey,cliente:JSON.parse(userCliente),cuenta:JSON.parse(userCuenta)};
    }
  } catch (error) {
    console.error('Error al cargar los datos del usuario desde AsyncStorage:', error);
  }
  return null;
};

 const clearUserData = async () => {
  try {
    await deleteItemAsync(config.USER_KEY);
    await deleteItemAsync(config.USER_CLIENTE);
    await deleteItemAsync(config.USER_CUENTA);
    await deleteItemAsync(config.USER_TOKEN_KEY);
  } catch (error) {
    console.error('Error al borrar los datos del usuario en AsyncStorage:', error);
  }
};

export const localStorage={
  saveUserData,
  loadUserData,
  clearUserData
}
