import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './entities/material.entity';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @Post()
  async create(@Param('userId') userId: number): Promise<Material> {
    return this.materialService.create(userId);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.materialService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedMaterial: Partial<Material>): Promise<Material> {
    return this.materialService.update(id, updatedMaterial);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Material> {
    return this.materialService.findOne(id);
  }

  @Get('search/:name')
  async findByName(@Param('name') name: string): Promise<Material[]> {
    return this.materialService.findByName(name);
  }

  @Get('search/author/:name')
  async findByAutor(@Param('name') name: string): Promise<Material[]> {
    return this.materialService.findByAutor(name);
  }
}
