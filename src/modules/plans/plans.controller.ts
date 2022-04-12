import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PlansService } from "./plans.service";
import { CreatePlanDto } from "./dto/create-plan.dto";
import { UpdatePlanDto } from "./dto/update-plan.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PlanEntity } from "./entities/plan.entity";
import { ConnectionArgs } from "src/common/dtos/page/connect-arg.dto";

@Controller("plans")
@ApiTags("Plans")
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post()
  @ApiCreatedResponse({ type: PlanEntity })
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.plansService.create(createPlanDto);
  }

  @Get()
  @ApiOkResponse({ type: [PlanEntity] })
  findAll(connectionArgs: ConnectionArgs) {
    return this.plansService.findAll(connectionArgs);
  }

  @Get(":id")
  @ApiOkResponse({ type: PlanEntity })
  findOne(@Param("id") id: string) {
    return this.plansService.findOne(id);
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: PlanEntity })
  update(@Param("id") id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.plansService.update(id, updatePlanDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: PlanEntity })
  remove(@Param("id") id: string) {
    return this.plansService.remove(id);
  }

  @Get("page")
  // @ApiOkResponse({ type: [PlanEntity] })
  findPage(connectionArgs: ConnectionArgs) {
    return this.plansService.findPage(connectionArgs);
  }
}
