import { Injectable, Inject } from '@nestjs/common';
import { Material } from './entities/material.entity';
import { Repository, DeleteResult, UpdateResult, Like} from 'typeorm';

@Injectable()
export class MaterialService {
  constructor(
    @Inject('MATERIAL_REPOSITORY')
    private repository: Repository<Material>,
  ) {}

  async findAll(): Promise<Material[]> {
    return this.repository.find();
  }

  async create(idUser: number): Promise<Material> {
    const material = new Material();
    material.userId = idUser;
    return this.repository.save(material);
  }

  async delete(id: number): Promise<DeleteResult> {
    const resultado: DeleteResult = await this.repository.delete(id);
    return resultado;
  }

  async update(
    id: number,
    updatedMaterial: Partial<Material>,
  ): Promise<Material> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedMaterial,
    );

    if (updateResult.affected === 0) {
      throw new Error('Material não encontrado ou a atualização falhou');
    }
    const material: Material = await this.repository.findOne({
      where: {
        materialId: id,
      },
    });

    return material;
  }

  async findOne(id: number): Promise<Material> {
    return await this.repository.findOne({
      where: {
        materialId: id,
      },
    });
  }
  // procura pelo nome 
  async findByName(name: string): Promise<Material[]> {
    return this.repository.find({
      where: {
        titulo: Like(`%${name}%`), // Usa Like para pesquisa parcial
      },
    });
  }

    // procura pelo autor
    async findByAutor(name: string): Promise<Material[]> {
      return this.repository.find({
        where: {
          autor: Like(`%${name}%`), // Usa Like para pesquisa parcial
        },
      });
    }
}
