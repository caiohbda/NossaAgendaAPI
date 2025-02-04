import { Owner } from "../entities/owner/owner";

export interface OwnerRepository {
  create(owner: Owner): Promise<void>;
}
