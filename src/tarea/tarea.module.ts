import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { Tarea, TareaSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tarea.name, schema: TareaSchema }]),
  ],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
