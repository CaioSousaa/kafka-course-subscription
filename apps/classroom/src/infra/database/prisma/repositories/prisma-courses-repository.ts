import { CoursesRepository } from "../../../../application/repositories/courses-repository";
import { Course } from "../../../../domain/course";
import prisma from "../prisma";

export class PrismaCoursesRepository implements CoursesRepository {
  async create(course: Course): Promise<void> {
    await prisma.course.create({
      data: {
        id: course.id,
        title: course.title,
        purchasesProductId: course.purchaseProductId,
      },
    });
  }

  async findPurchaseProductById(
    purchaseProductId: string
  ): Promise<Course | null> {
    const course = await prisma.course.findUnique({
      where: { purchasesProductId: purchaseProductId },
    });

    if (!course) {
      return null;
    }

    return new Course(
      {
        title: course.title,
        purchaseProductId: course.purchasesProductId,
      },
      course.id
    );
  }
}
