import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { DatabaseModule } from 'src/database/database.module';
import { TagsProviders } from './tag.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...TagsProviders, TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
