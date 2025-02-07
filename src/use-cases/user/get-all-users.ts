import { UserRepository } from "../../repositories/users-repository";
import { User } from "../../entities/user/user";

export class GetAllUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
