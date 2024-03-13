import { Injectable, Inject } from '@nestjs/common';
import { MaterialTag } from './entities/material-tag.entity';
import { UpdateResult, DeleteResult, Repository } from 'typeorm';
@Injectable()
export class MaterialTagsService {
  constructor(
    @Inject('MATERIALTAGS_REPOSITORY')
    private repository: Repository<MaterialTag>,
  ) {}

  async findAll(): Promise<MaterialTag[]> {
    return this.repository.find();
  }

  async create(idMaterial: number, idTag: number): Promise<MaterialTag> {
    // Cria uma nova instância de Animestype com os IDs do anime e do genero
    const materialTag = new MaterialTag();
    materialTag.materialId = idMaterial;
    materialTag.tagId = idTag;

    // Salva o objeto AnimeType no banco de dados
    return this.repository.save(materialTag);
  }

  async update(
    id: number,
    updatedMaterialTag: Partial<MaterialTag>,
  ): Promise<MaterialTag> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedMaterialTag,
    );

    if (updateResult.affected === 0) {
      throw new Error('Material-Tag não encontrado ou a atualização falhou');
    }
    const materialTag: MaterialTag = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    return materialTag;
  }

  async findOne(id: number): Promise<MaterialTag> {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    const resultado: DeleteResult = await this.repository.delete(id);
    return resultado;
  }
}
