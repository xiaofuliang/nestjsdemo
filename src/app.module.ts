import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TestInterceptor} from './testInterceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from './app/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.13.252',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bdc004',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController,
  ],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TestInterceptor,
    },
  ],

})
export class AppModule {}
