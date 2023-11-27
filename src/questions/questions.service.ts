import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Question } from 'src/schemas/questions.schema';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectModel(Question.name)
        private Question:mongoose.Model<Question>
    ){}
    async findAll(): Promise<Question[]> {
        const question = await this.Question.find({active: 1});
        return question;
    } 

    async createUser(question :Question): Promise<Question> {
        const res = await this.Question.create(question);
        return res;
    } 

    async getUser(question :String): Promise<Question> {
        const res = await this.Question.findById(question);
        return res;
    } 

    async deleteUser(question :String): Promise<Question> {
        const res = await this.Question.findByIdAndUpdate(question, {active:0});
        return res;
    } 
}
