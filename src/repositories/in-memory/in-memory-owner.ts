import { Owner } from "../../entities/owner/owner";
import { OwnerRepository } from "../owner-repository";

export class InMemoryOwnerRepository implements OwnerRepository {
  public items: Owner[] = [];

  async create(owner: Owner): Promise<void> {
    this.items.push(owner);
  }
}
