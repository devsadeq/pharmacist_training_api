import { IsDefined, IsEnum, isEnum, IsString } from "class-validator";

export class CreatePlanDto {
  @IsDefined()
  @IsString()
  public name: string;
}
