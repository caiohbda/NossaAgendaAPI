import { Barber } from "../../entities/barber/barber";
import { BarberRepository } from "../../repositories/babers-repository";

interface CreateBarberRequest {
  name: string;
  cpf: string;
}

type CreateBarberResponse = CreateBarberRequest;

export class CreateBarber {
  constructor(private barberRepository: BarberRepository) {}

  async execute({
    name,
    cpf,
  }: CreateBarberRequest): Promise<CreateBarberResponse> {
    const barber = new Barber({
      name,
      cpf,
    });

    await this.barberRepository.create(barber);

    return barber;
  }
}
