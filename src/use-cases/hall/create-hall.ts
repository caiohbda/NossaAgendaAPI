import { BarberProps } from "../../entities/barber/barber";
import { Hall } from "../../entities/hall/hall";
import { OwnerProps } from "../../entities/owner/owner";
import { HallRepository } from "../../repositories/halls-repository";

interface CreateHallResquest {
  name: string;
  cnpj: string;
  owner: OwnerProps;
  barber: BarberProps;
}

type CreateHallResponse = CreateHallResquest;

export class CreateHall {
  constructor(private hallRepository: HallRepository) {}

  async execute({
    name,
    cnpj,
    owner,
    barber,
  }: CreateHallResponse): Promise<CreateHallResponse> {
    const hall = new Hall({
      name,
      cnpj,
      owner,
      barber,
    });

    await this.hallRepository.create(hall);

    return hall;
  }
}
