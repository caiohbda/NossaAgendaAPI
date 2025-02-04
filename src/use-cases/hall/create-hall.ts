import { Hall } from "../../entities/hall/hall";
import { HallRepository } from "../../repositories/halls-repository";

interface CreateHallResquest {
  name: string;
  cnpj: string;
}

type CreateHallResponse = CreateHallResquest;

export class CreateHall {
  constructor(private hallRepository: HallRepository) {}

  async execute({
    name,
    cnpj,
  }: CreateHallResquest): Promise<CreateHallResponse> {
    const hall = new Hall({
      name,
      cnpj,
    });

    await this.hallRepository.create(hall);

    return hall;
  }
}
