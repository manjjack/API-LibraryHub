import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { NoMaterialProviders } from './no-material.provider';
import { NoMaterialService } from './no-material.service';
import { NoMaterialController } from './no-material.controller';


@Module({
  imports: [DatabaseModule],
  providers: [...NoMaterialProviders, NoMaterialService],
  controllers: [NoMaterialController],
})
export class NoMaterialModule {}
