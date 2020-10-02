import { Test, TestingModule } from '@nestjs/testing';
import { DbController } from './db.controller';

describe('DbController', () => {
  let controller: DbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbController],
    }).compile();

    const applicatio = module.createNestApplication(DbController);
    controller = applicatio.get(DbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
