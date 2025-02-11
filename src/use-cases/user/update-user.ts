import { User } from "../../entities/user/user";
import { UserRepository } from "../../repositories/users-repository";

export interface UpdateUserRequest {
  id: string;
  name?: string;
  password?: string;
  role?: string;
}

export class UpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    id,
    name,
    password,
    role,
  }: UpdateUserRequest): Promise<User | undefined> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return this.userRepository.update(id, { name, password, role });
  }
}
