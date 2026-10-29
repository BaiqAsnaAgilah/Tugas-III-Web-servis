import { Module } from '@nestjs/common';
import { DestinasiController } from './destinasi.controller.js';
import { DestinasiService } from './destinasi.service.js';

@Module({
  controllers: [DestinasiController],
  providers: [DestinasiService],
})
export class DestinasiModule {}
