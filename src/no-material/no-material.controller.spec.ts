import { Test, TestingModule } from '@nestjs/testing';
import { NoMaterialController } from './no-material.controller';
import { NoMaterialService } from './no-material.service';

describe('NoMaterialController', () => {
  let controller: NoMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoMaterialController],
      providers: [NoMaterialService],
    }).compile();

    controller = module.get<NoMaterialController>(NoMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
