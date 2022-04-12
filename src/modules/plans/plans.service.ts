import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePlanDto } from "./dto/create-plan.dto";
import { UpdatePlanDto } from "./dto/update-plan.dto";
import { PlanEntity } from "./entities/plan.entity";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { ConnectionArgs } from "src/common/dtos/page/connect-arg.dto";

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanDto: CreatePlanDto) {
    return new PlanEntity(
      await this.prisma.plan.create({ data: createPlanDto })
    );
  }

  async findAll(connectionArgs:ConnectionArgs) {
    let plans = await this.prisma.plan.findMany();
    return plans.map((plan) => new PlanEntity(plan));
  }

  async findPage(connectionArgs:ConnectionArgs) {
    return findManyCursorConnection(
      (args) =>
        this.prisma.plan.findMany({
          ...args,
          // where: where,
        }),
      () =>
        this.prisma.plan.count({
          // where: where,
        }),
      connectionArgs // 👈 use connection arguments
    );
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
