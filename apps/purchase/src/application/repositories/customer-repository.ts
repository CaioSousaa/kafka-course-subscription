import { Customer } from "../../domain/customer";

export interface CustomerRepository {
  create(customer: Customer): Promise<void>;
  findCustomerByEmail(email: string): Promise<Customer | null>;
}
