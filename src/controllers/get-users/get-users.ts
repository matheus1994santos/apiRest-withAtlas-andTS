import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  //   getUsersRepository: IGetUsersRepository;

  //   constructor(getUsersRepository: IGetUsersRepository) {
  //     this.getUsersRepository = getUsersRepository;
  //   }

  //   ou a mesma coisa

  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      // validar requisição
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();
      // o controller sempre vai retornar uma resposta http;

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
