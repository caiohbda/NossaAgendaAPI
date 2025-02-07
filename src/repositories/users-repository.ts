import { User } from "../entities/user/user";

export interface UserRepository {
  create(user: User): Promise<void>;
  getAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
