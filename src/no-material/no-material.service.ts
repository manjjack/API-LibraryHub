import { Inject, Injectable } from '@nestjs/common';
import { NoMaterial } from './entities/no-material.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class NoMaterialService {
  constructor(
    @Inject('NOMATERIAL_REPOSITORY')
    private repository: Repository<NoMaterial>,
  ) {}

  async create(noMaterial: NoMaterial): Promise<NoMaterial> {
    return this.repository.save(noMaterial);
  }

  async findAll(): Promise<NoMaterial[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<NoMaterial> {
    return this.repository.findOne({
      where: {
        idNoMaterial: id,
      },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    const resultado: DeleteResult = await this.repository.delete(id);
    return resultado;
  }

  async update(
    id: number,
    updatedNoMaterial: Partial<NoMaterial>,
  ): Promise<NoMaterial> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedNoMaterial,
    );

    if (updateResult.affected === 0) {
      throw new Error('No-Material não encontrado ou a atualização falhou');
    }
    const noMaterial: NoMaterial = await this.repository.findOne({
      where: {
        idNoMaterial: id,
      },
    });

    return noMaterial;
  }
}
