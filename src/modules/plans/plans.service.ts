import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePlanDto } from "./dto/create-plan.dto";
import { UpdatePlanDto } from "./dto/update-plan.dto";
import { PlanEntity } from "./entities/plan.entity";

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanDto: CreatePlanDto) {
    return new PlanEntity(
      await this.prisma.plan.create({ data: createPlanDto })
    );
  }

  async findAll() {
    let plans = await this.prisma.plan.findMany();
    return plans.map((plan) => new PlanEntity(plan));
  }

  async findOne(id: string) {
    return new PlanEntity(
      await this.prisma.plan.findUnique({ where: { id: id } })
    );
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    return new PlanEntity(
      await this.prisma.plan.update({
        where: { id: id },
        data: updatePlanDto,
      })
    );
  }

  async remove(id: string) {
    return new PlanEntity(await this.prisma.plan.delete({ where: { id: id } }));
  }
}
