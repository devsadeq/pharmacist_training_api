import { PartialType } from '@nestjs/mapped-types';
import { CreateRxDto } from './create-rx.dto';

export class UpdateRxDto extends PartialType(CreateRxDto) {}
