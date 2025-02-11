import { User } from "../../entities/user/user";
import { UserRepository } from "../../repositories/users-repository";

export class FindById {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    return user ?? null;
  }
}
