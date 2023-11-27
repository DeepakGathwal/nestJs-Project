import { Controller, Get,Post, Body, Param, Query, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../schemas/user.schema';

import { CreateUser } from '../validations/check.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
    constructor(private Users:UserService){}
    @Get()
    async getAllUser(): Promise<User[]>{
        return this.Users.findAll();
    }

    @Post()
    async addUser(
        @Body()
        user:CreateUser): Promise<User>{
        const bcryptPass  = bcrypt.hashSync(String(user.password), 8);
        return this.Users.createUser({
            name:user.name,
            password :bcryptPass, 
            field:user.field,
            active:1,
            email:user.email
        })
    }

    @Get(":id")
    async findUser(
        @Param("id")
        user): Promise<User>{
        return this.Users.getUser(user)
    }
    
    @Delete(":id")
    async deleteUser(
        @Param("id")
        user): Promise<User>{
        return this.Users.deleteUser(user)
    }
}
