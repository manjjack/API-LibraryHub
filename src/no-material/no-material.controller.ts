import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoMaterialService } from './no-material.service';
import { NoMaterial } from './entities/no-material.entity';

@Controller('no-material')
export class NoMaterialController {
  constructor(private readonly noMaterialService: NoMaterialService) {}

  @Post()
  create(@Body() noMaterial: NoMaterial) {
    return this.noMaterialService.create(noMaterial);
  }

  @Get()
  findAll() {
    return this.noMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() noMaterial: NoMaterial) {
    return this.noMaterialService.update(+id, noMaterial);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noMaterialService.delete(+id);
  }
}
