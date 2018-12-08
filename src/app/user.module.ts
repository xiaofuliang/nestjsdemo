import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TestInterceptor } from '../testInterceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: TestInterceptor,
  }
  ],

})
export class UserModule { }
