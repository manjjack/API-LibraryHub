import { Injectable, Inject } from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private repository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.repository.find();
  }

  async create(tag: Tag): Promise<Tag> {
    return this.repository.save(tag);
  }

  async delete(id: number): Promise<DeleteResult> {
    const resultado: DeleteResult = await this.repository.delete(id);
    return resultado;
  }

  async update(id: number, updatedTag: Partial<Tag>): Promise<Tag> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedTag,
    );

    if (updateResult.affected === 0) {
      throw new Error('Tag não encontrado ou a atualização falhou');
    }
    const tag: Tag = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    return tag;
  }

  async findOne(id: number): Promise<Tag> {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }
}
