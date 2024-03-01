import { Test, TestingModule } from '@nestjs/testing';
import { MaterialTagsService } from './material-tags.service';

describe('MaterialTagsService', () => {
  let service: MaterialTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialTagsService],
    }).compile();

    service = module.get<MaterialTagsService>(MaterialTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
