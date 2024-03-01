import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Post()
  async create(@Body() tag: Tag): Promise<Tag> {
    return this.tagService.create(tag);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.tagService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedTag: Partial<Tag>): Promise<Tag> {
    return this.tagService.update(id, updatedTag);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tag> {
    return this.tagService.findOne(id);
  }
}
