import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, UpdateResult, Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';
import { Material } from 'src/material/entities/material.entity';


@Injectable()
export class RatingService {
  constructor(
    @Inject('RATING_REPOSITORY')
    private repository: Repository<Rating>,
    @Inject("MATERIAL_REPOSITORY")
    private readonly materialRepository: Repository<Material>,
  ) {}
  async create(idMaterial: number, idUser: number): Promise<Rating> {
    // uso essa abordagem devido aos problemas ao guardar as chaves estrangeiras
    const rating = new Rating();
    rating.materialId = idMaterial;
    rating.userId = idUser;
    return this.repository.save(rating);
  }

  async update(id: number, updatedAnimetype: Partial<Rating>): Promise<Rating> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedAnimetype,
    );

    if (updateResult.affected === 0) {
      throw new Error('Usuário não encontrado ou a atualização falhou');
    }
    const rating: Rating = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    return rating;
  }

  async findOne(id: number): Promise<Rating> {
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
  
  
  async calculateRanking(): Promise<Material[]> {
    const materialWithRatings = await this.materialRepository
      .createQueryBuilder('material')
      .leftJoinAndSelect('material.ratings', 'rating')
      .loadRelationCountAndMap('material.ratingCount', 'material.ratings')
      .addSelect('AVG(rating.rating)', 'averageRating')
      .groupBy('materila.materialId')
      .orderBy('averageRating', 'DESC')
      .getMany();

    return materialWithRatings;
  }

  async findRatingMaterial(idMaterial:number, idUser:number): Promise<Rating>{
    return await this.repository.findOne({
      where:{
        userId : idUser,
        materialId : idMaterial
      }
    });

  }
}
