import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps : true,
})
export class User {
    @Prop()
    name:String;
    
    @Prop()
    password:String;

    @Prop()
    field:String;

    @Prop()
    active:Number;

    @Prop()
    email:String;

    
}
export const UserSchema = SchemaFactory.createForClass(User);