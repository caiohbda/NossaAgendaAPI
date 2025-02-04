import { Barber } from "../entities/barber/barber";

export interface BarberRepository {
  create(barber: Barber): Promise<void>;
}
