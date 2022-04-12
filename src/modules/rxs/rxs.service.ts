import { Injectable } from '@nestjs/common';
import { CreateRxDto } from './dto/create-rx.dto';
import { UpdateRxDto } from './dto/update-rx.dto';

@Injectable()
export class RxsService {
  create(createRxDto: CreateRxDto) {
    return 'This action adds a new rx';
  }

  findAll() {
    return `This action returns all rxs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rx`;
  }

  update(id: number, updateRxDto: UpdateRxDto) {
    return `This action updates a #${id} rx`;
  }

  remove(id: number) {
    return `This action removes a #${id} rx`;
  }
}
