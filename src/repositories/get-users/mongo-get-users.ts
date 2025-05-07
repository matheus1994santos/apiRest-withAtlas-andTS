import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstname: "Matheus",
        lastname: "Noronha",
        email: "noronha@gmail.com",
        password: "123",
      },
    ];
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
