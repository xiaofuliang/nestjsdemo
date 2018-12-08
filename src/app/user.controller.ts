import { Controller, Get, Req, Param, Post, Query , UsePipes } from '@nestjs/common';
import {ValidationPipe} from './common/validation.pipe';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

import { User } from './user.entity';

@Controller('user')
export class UserController {

    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

    @Get('create')
    @UsePipes(new ValidationPipe())
    async create(@Req() request, @Query() userDto: UserDto) {
        const a = this.userRepository.save(userDto).then(res => {
            return res;
        });
        return await a;
    }

    @Get('login')
    async login(@Query() querys) {
        const loginid = querys.ld;
        const password = querys.pd;
        return await this.userRepository.find({ loginid, password }).then(res => {
            return res;
        });
    }
}