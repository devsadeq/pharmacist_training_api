import { Injectable } from '@nestjs/common';
import { CreateCompoanyDto } from './dto/create-compoany.dto';
import { UpdateCompoanyDto } from './dto/update-compoany.dto';

@Injectable()
export class CompoaniesService {
  create(createCompoanyDto: CreateCompoanyDto) {
    return 'This action adds a new compoany';
  }

  findAll() {
    return `This action returns all compoanies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compoany`;
  }

  update(id: number, updateCompoanyDto: UpdateCompoanyDto) {
    return `This action updates a #${id} compoany`;
  }

  remove(id: number) {
    return `This action removes a #${id} compoany`;
  }
}
