import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_NAME, MONGODB_URI } from './config/constants';
import { TareaModule } from './tarea/tarea.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(MONGODB_URI),
        dbName: configService.get<string>(MONGODB_NAME),
      }),
      inject: [ConfigService],
    }),
    TareaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
