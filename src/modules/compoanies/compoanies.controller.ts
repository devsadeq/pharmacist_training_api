import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompoaniesService } from './compoanies.service';
import { CreateCompoanyDto } from './dto/create-compoany.dto';
import { UpdateCompoanyDto } from './dto/update-compoany.dto';

@Controller('compoanies')
export class CompoaniesController {
  constructor(private readonly compoaniesService: CompoaniesService) {}

  @Post()
  create(@Body() createCompoanyDto: CreateCompoanyDto) {
    return this.compoaniesService.create(createCompoanyDto);
  }

  @Get()
  findAll() {
    return this.compoaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compoaniesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompoanyDto: UpdateCompoanyDto) {
    return this.compoaniesService.update(+id, updateCompoanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compoaniesService.remove(+id);
  }
}
