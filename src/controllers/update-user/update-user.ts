import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdanteUserParams, IUpdanteUserRepository } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdanteUserRepository) {}
  async handle(
    httpRequest: HttpRequest<IUpdanteUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Missing fields");
      }

      if (!id) {
        return badRequest("Missing user id");
      }

      const allowedFieldsToUpdate: (keyof IUpdanteUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldNotAllowedToUptade = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdanteUserParams)
      );

      if (someFieldNotAllowedToUptade) {
        return badRequest("Some received field is not allow");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
