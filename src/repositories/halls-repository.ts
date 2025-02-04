import { Hall } from "../entities/hall/hall";

export interface HallRepository {
  create(hall: Hall): Promise<void>;
}
