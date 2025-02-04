import { Hall } from "../../entities/hall/hall";
import { HallRepository } from "../halls-repository";

export class InMemoryHallsRepository implements HallRepository {
  public items: Hall[] = [];

  async create(hall: Hall): Promise<void> {
    this.items.push(hall);
  }
}
