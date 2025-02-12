import { Appointment } from "../../entities/appointment/appointment";
import { AppointmentRepository } from "../../repositories/appointments-repository";
import { UserRepository } from "../../repositories/users-repository";

export interface CreateAppointmentRequest {
  customerId: string;
  barberId: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(
    private appointmentRepository: AppointmentRepository,
    private userRepository: UserRepository
  ) {}

  async execute({
    barberId,
    customerId,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const customer = await this.userRepository.findById(customerId);
    const barber = await this.userRepository.findById(barberId);
    console.log("Customer found:", customer);
    console.log("Barber found:", barber);

    if (customer === undefined) {
      throw new Error("Customer not found");
    }

    if (barber === undefined) {
      throw new Error("Barber not found");
    }

    const overLappingAppointment =
      await this.appointmentRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overLappingAppointment) {
      throw new Error("Another appointment overlaps this appointment dates");
    }

    const appointment = new Appointment({
      barber,
      customer,
      startsAt,
      endsAt,
    });

    await this.appointmentRepository.create(appointment);

    return appointment;
  }
}
