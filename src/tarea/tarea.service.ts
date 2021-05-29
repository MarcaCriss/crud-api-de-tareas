import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateTareaDto, EditTareaDto } from './dtos';
import { Tarea, TareaDocument } from './schemas';

@Injectable()
export class TareaService {
  constructor(
    @InjectModel(Tarea.name)
    private tareaModel: Model<TareaDocument>,
  ) {}

  async getAllTask(): Promise<Tarea[]> {
    return await this.tareaModel.find().exec();
  }

  async createTask(createTareaDto: CreateTareaDto) {
    const tareaCreada = new this.tareaModel(createTareaDto);
    tareaCreada.save();
    return {
      message: 'Tarea creada exitosamente',
      data: tareaCreada,
    };
  }

  async getOneTask(_id: number) {
    const tarea = await this.tareaModel.findById({ _id }).exec();
    if (!tarea) new NotFoundException('La tarea no existe');
    return tarea;
  }

  async editTask(_id: number, editTareaDto: EditTareaDto) {
    return await this.tareaModel.findByIdAndUpdate({ _id }, editTareaDto, {
      new: true,
    });
  }

  async deleteTask(_id: number) {
    const tareaDelete = await this.tareaModel.findByIdAndDelete({ _id });
    return {
      message: 'Tarea eliminada correctamente',
      data: tareaDelete,
    };
  }
}
