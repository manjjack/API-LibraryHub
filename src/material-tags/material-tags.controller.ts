import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MaterialTagsService } from './material-tags.service';
import { MaterialTag } from './entities/material-tag.entity';

@Controller('material-tags')
export class MaterialTagsController {
  constructor(private readonly materialTagService: MaterialTagsService) {}

  @Get()
  async findAll(): Promise<MaterialTag[]> {
    return this.materialTagService.findAll();
  }

  @Post(':materialId/:tagId')
  async create(@Param('materialId') materialId: number, @Param('tagId') tagId: number): Promise<MaterialTag> {
    return this.materialTagService.create(materialId, tagId);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedMaterialTag: Partial<MaterialTag>): Promise<MaterialTag> {
    return this.materialTagService.update(id, updatedMaterialTag);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MaterialTag> {
    return this.materialTagService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.materialTagService.delete(id);
  }
}
