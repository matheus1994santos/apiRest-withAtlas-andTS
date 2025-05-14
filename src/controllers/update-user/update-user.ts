import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  IUpdanteUserController,
  IUpdanteUserParams,
  IUpdanteUserRepository,
} from "./protocols";

export class UpdareUserController implements IUpdanteUserController {
  constructor(private readonly updateUserRepository: IUpdanteUserRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
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
        return {
          statusCode: 400,
          body: "Some received field is not allow",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
