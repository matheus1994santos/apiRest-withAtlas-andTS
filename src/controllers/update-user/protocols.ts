import { User } from "../../models/user";

export interface IUpdanteUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdanteUserRepository {
  updateUser(id: string, params: IUpdanteUserParams): Promise<User>;
}
