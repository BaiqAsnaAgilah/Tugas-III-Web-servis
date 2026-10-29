import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DestinasiModule } from './destinasi/destinasi.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [PrismaModule, DestinasiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
