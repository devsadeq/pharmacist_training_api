import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RxsService } from './rxs.service';
import { CreateRxDto } from './dto/create-rx.dto';
import { UpdateRxDto } from './dto/update-rx.dto';

@Controller('rxs')
export class RxsController {
  constructor(private readonly rxsService: RxsService) {}

  @Post()
  create(@Body() createRxDto: CreateRxDto) {
    return this.rxsService.create(createRxDto);
  }

  @Get()
  findAll() {
    return this.rxsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rxsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRxDto: UpdateRxDto) {
    return this.rxsService.update(+id, updateRxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rxsService.remove(+id);
  }
}
