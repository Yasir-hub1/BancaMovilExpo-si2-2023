// src/application/UseCases.js
class GetUserByIdUseCase {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(userId) {
      try {
        const user = await this.userRepository.getUserById(userId);
        return user;
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default GetUserByIdUseCase;
  