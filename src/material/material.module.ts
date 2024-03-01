import { Module } from '@nestjs/common';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';
import { DatabaseModule } from 'src/database/database.module';
import { MaterialProviders } from './material.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...MaterialProviders, MaterialService],
  controllers: [MaterialController],
})
export class MaterialModule {}
