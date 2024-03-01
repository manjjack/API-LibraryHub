import { DataSource } from 'typeorm';
import { MaterialTag } from './entities/material-tag.entity';

export const MaterialTagsProviders = [
  {
    provide: 'MATERIALTAGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MaterialTag),
    inject: ['DATA_SOURCE'],
  },
  
];