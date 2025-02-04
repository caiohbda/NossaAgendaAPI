import { Barber } from "../../entities/barber/barber";
import { BarberRepository } from "../babers-repository";

export class InMemoryBarberRepository implements BarberRepository {
  public items: Barber[] = [];

  async create(barber: Barber): Promise<void> {
    this.items.push(barber);
  }
}
