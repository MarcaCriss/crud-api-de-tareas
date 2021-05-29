import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { Tarea, TareaSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Tarea.name,
        useFactory: () => {
          return TareaSchema;
        },
      },
    ]),
  ],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
