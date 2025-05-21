import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  //   getUsersRepository: IGetUsersRepository;

  //   constructor(getUsersRepository: IGetUsersRepository) {
  //     this.getUsersRepository = getUsersRepository;
  //   }

  //   ou a mesma coisa

  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      // validar requisição
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();
      // o controller sempre vai retornar uma resposta http;

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
