
import { Controller, Get,Post, Body, Param, Query, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from 'src/schemas/questions.schema';
import { CreateQuestion } from 'src/validations/check.dto';

@Controller('questions')
export class QuestionsController {
   constructor(private Questions:QuestionsService){}
   @Get()
   async getAllUser(): Promise<Question[]>{
       return this.Questions.findAll();
   }

   @Post()
   async addUser(
       @Body()
       question:CreateQuestion): Promise<Question>{
    
       return this.Questions.createUser(question)
   }

   @Get(":id")
   async findUser(
       @Param("id")
       question): Promise<Question>{
       return this.Questions.getUser(question)
   }
   
   @Delete(":id")
   async deleteUser(
       @Param("id")
       question): Promise<Question>{
       return this.Questions.deleteUser(question)
   }
}
