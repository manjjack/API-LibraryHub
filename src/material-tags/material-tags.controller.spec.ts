import { Test, TestingModule } from '@nestjs/testing';
import { MaterialTagsController } from './material-tags.controller';
import { MaterialTagsService } from './material-tags.service';

describe('MaterialTagsController', () => {
  let controller: MaterialTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialTagsController],
      providers: [MaterialTagsService],
    }).compile();

    controller = module.get<MaterialTagsController>(MaterialTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
