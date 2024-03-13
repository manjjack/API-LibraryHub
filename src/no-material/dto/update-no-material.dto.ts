import { PartialType } from '@nestjs/mapped-types';
import { CreateNoMaterialDto } from './create-no-material.dto';

export class UpdateNoMaterialDto extends PartialType(CreateNoMaterialDto) {}
