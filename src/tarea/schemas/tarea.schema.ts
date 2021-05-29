import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TareaDocument = Tarea & Document;

@Schema()
export class Tarea {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ default: false })
  status: boolean;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);
