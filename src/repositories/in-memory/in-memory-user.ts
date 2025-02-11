import { User } from "../../entities/user/user";
import { UserRepository } from "../users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = [];

  async create(user: User): Promise<void> {
    this.items.push(user);
  }

  async getAll(): Promise<User[]> {
    return this.items;
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Usuário com ID ${id} excluído com sucesso.`);
    } else {
      throw new Error("Usuário não foi encontrado");
    }
  }

  async findById(id: string): Promise<User | undefined> {
    return this.items.find((user) => user.id === id);
  }
}
