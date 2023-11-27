import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { User } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class UserService {
    constructor(
     @InjectModel(User.name)
    private User: mongoose.Model<User>

    ) {}
    async findAll(): Promise<User[]> {
        const user = await this.User.find({active: 1});
        return user;
    } 

    async createUser(user :User): Promise<User> {
        const res = await this.User.create(user);
        return res;
    } 

    async getUser(user :String): Promise<User> {
        const res = await this.User.findById(user);
        return res;
    } 

    async deleteUser(user :String): Promise<User> {
        const res = await this.User.findByIdAndUpdate(user, {active:0});
        return res;
    } 
}
