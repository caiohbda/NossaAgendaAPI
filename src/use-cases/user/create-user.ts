import { User } from "../../entities/user/user";
import { UserRepository } from "../../repositories/users-repository";

export interface CreateUserResquest {
  name: string;
  cpf: string;
  password: string;
  role: string;
}

type CreateUserResponse = CreateUserResquest;

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    cpf,
    password,
    role,
  }: CreateUserResquest): Promise<CreateUserResponse> {
    const user = new User({
      name,
      cpf,
      password,
      role,
    });

    await this.userRepository.create(user);

    console.log("usuario criado com sucesso: ", user);

    return user;
  }
}
