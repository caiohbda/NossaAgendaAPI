import { User } from "../../entities/user/user";
import { UserRepository } from "../users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = [];

  async create(user: User): Promise<void> {
    this.items.push(user);
    console.log("Usuário salvo:", user);
  }

  async getAll(): Promise<User[]> {
    return this.items;
  }
}
