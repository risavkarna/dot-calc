import { Module, Global } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Global()
@Module({
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
