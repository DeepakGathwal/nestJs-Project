import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Level{
    EASY = "Easy",
    Medium = "Medium",
    Hard = "Hard",
}

@Schema({
    timestamps : true,
})
export class Question {
    @Prop()
    title:String;
    
    @Prop()
    question:String;

    @Prop()
    level:Level;

    @Prop()
    example:String;

    @Prop()
    answer:String;

    @Prop({default:0})
    attempts:Number

    @Prop({default:1})
    active:Number
   
    @Prop()
    creator: String
    
}
export const QuestionSchema = SchemaFactory.createForClass(Question);