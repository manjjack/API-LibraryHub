import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private repository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.repository.find();
  }

  async create(idUser: number, idMaterial: number): Promise<Comment> {
    
    const comment = new Comment();
    comment.user = idUser;
    comment.material = idMaterial;

    
    return this.repository.save(comment);
  }

  async update(id: number, updatedComment: Partial<Comment>): Promise<Comment> {
    const updateResult: UpdateResult = await this.repository.update(
      id,
      updatedComment,
    );

    if (updateResult.affected === 0) {
      throw new Error('Comentário não encontrado ou a atualização falhou');
    }
    const comment: Comment = await this.repository.findOne({
      where: {
        commentId: id,
      },
    });
    return comment;
  }

  async findOne(id: number): Promise<Comment> {
    return await this.repository.findOne({
      where: {
        commentId: id,
      },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    const resultado: DeleteResult = await this.repository.delete(id);
    return resultado;
  }
}
