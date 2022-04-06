import { ApiProperty } from "@nestjs/swagger";
import { Plan } from "@prisma/client";

export class PlanEntity implements Plan {
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;

  constructor(partial: Partial<PlanEntity>) {
    Object.assign(this, partial);
  }
}
