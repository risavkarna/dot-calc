import { Test } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiService],
      controllers: [ApiController],
    }).compile();

    const applicatio = module.createNestApplication(ApiController);
    controller = applicatio.get(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
