import { PartialType } from '@nestjs/mapped-types';
import { CreateCompoanyDto } from './create-compoany.dto';

export class UpdateCompoanyDto extends PartialType(CreateCompoanyDto) {}
