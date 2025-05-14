import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IUpdanteUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdanteUserController {
  handle(httpReequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface IUpdanteUserRepository {
  updateUser(id: string, params: IUpdanteUserParams): Promise<User>;
}
