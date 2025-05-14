import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}

// Caso queira colocar outros ou mais funciona bem tbm
// export class PostgresGetUsersRepository implements IGetUsersRepository {
//   async getUsers(): Promise<User[]> {
//     return [
//       {
//         firstname: "Matheus",
//         lastname: "Noronha",
//         email: "noronha@gmail.com",
//         password: "123",
//       },
//     ];
//   }
// }
