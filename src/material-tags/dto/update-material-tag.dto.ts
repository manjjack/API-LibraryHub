import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialTagDto } from './create-material-tag.dto';

export class UpdateMaterialTagDto extends PartialType(CreateMaterialTagDto) {}
