import { Module } from '@nestjs/common';
import { MaterialTagsController } from './material-tags.controller';
import { MaterialTagsService } from './material-tags.service';
import { DatabaseModule } from 'src/database/database.module';
import { MaterialTagsProviders } from './material-tags.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...MaterialTagsProviders, MaterialTagsService],
  controllers: [MaterialTagsController],
})
export class MaterialTagsModule {}
