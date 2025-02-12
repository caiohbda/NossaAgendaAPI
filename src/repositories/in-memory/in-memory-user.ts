import { User, UserProps } from "../../entities/user/user";
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
    }
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.items.find((user) => user.id === id);
    return user;
  }

  async update(
    id: string,
    userData: Partial<Omit<UserProps, "id">>
  ): Promise<User | undefined> {
    const user = this.items.find((user) => user.id === id);
    if (!user) {
      return undefined;
    }

    const updatedUserProps: UserProps = {
      id: user.id,
      name: userData.name ?? user.name,
      password: userData.password ?? user.password,
      role: userData.role ?? user.role,
      cpf: userData.cpf ?? user.cpf,
    };

    const updatedUser = new User(updatedUserProps);

    const index = this.items.findIndex((user) => user.id === id);
    this.items[index] = updatedUser;

    return updatedUser;
  }
}
