import { UserRepository } from "repositories/users-repository";

export class DeleteUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
