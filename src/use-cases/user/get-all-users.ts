import { UserRepository } from "../../repositories/users-repository";
import { User } from "../../entities/user/user";

export class GetAllUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    console.log("buscando usuarios no repositorio...");
    return this.userRepository.getAll();
  }
}
