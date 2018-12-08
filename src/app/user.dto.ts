import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class UserDto {

    @IsNotEmpty({ message: '登录账号不能为空' })
    loginid: string;

    @IsNotEmpty()
    password: string;
}