import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TareaService } from './tarea.service';
import { CreateTareaDto, EditTareaDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tarea')
@Controller('tarea')
export class TareaController {
  constructor(private tareaService: TareaService) {}

  @Get()
  async getAllTask() {
    return await this.tareaService.getAllTask();
  }

  @Get('complete')
  async getAllTaskComplete() {
    return await this.tareaService.getAllTaskComplete();
  }

  @Get('incomplete')
  async getAllTaskIncomplete() {
    return await this.tareaService.getAllTaskIncomplete();
  }

  @Post('create')
  async createTask(@Body() createTareaDto: CreateTareaDto) {
    return await this.tareaService.createTask(createTareaDto);
  }

  @Get(':id')
  async getOneTask(@Param('id') id: string) {
    return await this.tareaService.getOneTask(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() editTareaDto: EditTareaDto,
  ) {
    return await this.tareaService.editTask(id, editTareaDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tareaService.deleteTask(id);
  }
}
