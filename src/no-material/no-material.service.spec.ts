import { Test, TestingModule } from '@nestjs/testing';
import { NoMaterialService } from './no-material.service';

describe('NoMaterialService', () => {
  let service: NoMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoMaterialService],
    }).compile();

    service = module.get<NoMaterialService>(NoMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
