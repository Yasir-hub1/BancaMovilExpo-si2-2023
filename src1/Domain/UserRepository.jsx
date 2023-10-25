// src/domain/UserRepository.js
class UserRepository {

  async getUser() {
    // Supongamos que aquí realizas una solicitud a una API o accedes a datos locales
    // y obtienes los datos del usuario.
    // En este ejemplo, simplemente simularemos la obtención de datos.
    return {
      id: 1,
      username: "ejemploUsuario",
      email: "usuario@example.com",
    }
    };
  getUserById(id) {
    // Deberías lanzar una excepción o implementar esta función en las clases concretas.
  }
  saveUser(user) {
    // Deberías lanzar una excepción o implementar esta función en las clases concretas.
  }
}

export default UserRepository;
