import { DataSource } from 'typeorm';
import { Material } from './entities/material.entity';
import { NoMaterial } from 'src/no-material/entities/no-material.entity';

export const MaterialProviders = [
  {
    provide: 'MATERIAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Material),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'NOMATERIAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(NoMaterial),
    inject: ['DATA_SOURCE'],
  }
  
];