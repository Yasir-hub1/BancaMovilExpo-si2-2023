// src/application/LoginUseCase.js
import UserRepository from "../Domain/UserRepository";


// LoginUseCase.js
class LoginUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    try {
      // Llama al método getUser del UserRepository para obtener los datos del usuario
      const userData = await this.userRepository.getUser();
      console.log("userDSata ",userData);

      // Realiza cualquier lógica de inicio de sesión que sea necesaria
      // ...

      // Retorna los datos del usuario obtenidos
      return userData;
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la obtención de datos o el inicio de sesión
      console.error("Error de inicio de sesión:", error);
      throw error; // Puedes propagar el error para que se maneje en un nivel superior si es necesario
    }
  }
}

export default LoginUseCase;

