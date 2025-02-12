import { UserRepository } from "../../repositories/users-repository";
import { AppointmentRepository } from "../../repositories/appointments-repository";
import { Appointment } from "../../entities/appointment/appointment";

export class CreateAppointment {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute({
    customerId,
    barberId,
    startsAt,
    endsAt,
  }: {
    customerId: string;
    barberId: string;
    startsAt: string;
    endsAt: string;
  }): Promise<void> {
    console.log(
      "CreateAppointment: customerId:",
      customerId,
      "barberId:",
      barberId
    );

    const customer = await this.userRepository.findById(customerId);
    const barber = await this.userRepository.findById(barberId);

    console.log("Found customer:", customer);
    console.log("Found barber:", barber);

    if (!customer || !barber) {
      throw new Error("Customer or barber not found");
    }

    const appointment = new Appointment({
      customer,
      barber,
      startsAt: new Date(startsAt),
      endsAt: new Date(endsAt),
    });

    await this.appointmentRepository.create(appointment);
  }
}
