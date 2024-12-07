import { Course } from "../../domain/course";

export interface CoursesRepository {
  findPurchaseProductById(purchaseProductId: string): Promise<Course | null>;
  create(course: Course): Promise<void>;
}
