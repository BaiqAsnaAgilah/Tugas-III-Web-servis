import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

import { DestinasiService } from './destinasi.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) {}

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll() {
    return this.destinasiService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID destinasi', example: 2 })
  @ApiResponse({ status: 200, description: 'Detail destinasi berhasil diambil' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    return this.destinasiService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah data destinasi' })
  @ApiParam({ name: 'id', description: 'ID destinasi yang akan diubah', example: 2 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diubah' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi' })
  @ApiParam({ name: 'id', description: 'ID destinasi yang akan dihapus', example: 2 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.remove(id);
  }
}
