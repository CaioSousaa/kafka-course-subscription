import { CustomerRepository } from "../../../../application/repositories/customer-repository";
import { Customer } from "../../../../domain/customer";
import prisma from "../prisma";

export class PrismaCustomerRepository implements CustomerRepository {
  async create(customer: Customer): Promise<void> {
    await prisma.customer.create({
      data: {
        id: customer.id,
        cpf: customer.cpf,
        name: customer.name,
        email: customer.email,
      },
    });
  }

  async findCustomerByEmail(email: string): Promise<Customer | null> {
    const customer = await prisma.customer.findFirst({
      where: { email: email },
    });

    if (!customer) {
      return null;
    }

    return new Customer(
      {
        name: customer.name,
        email: customer.email,
        cpf: customer.cpf,
      },
      customer.id
    );
  }
}
