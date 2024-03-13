import { DataSource } from 'typeorm';
import { NoMaterial } from './entities/no-material.entity';

export const NoMaterialProviders = [
  {
    provide: 'NOMATERIAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(NoMaterial),
    inject: ['DATA_SOURCE'],
  },
];