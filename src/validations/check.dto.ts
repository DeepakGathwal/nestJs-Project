import { Level } from "src/schemas/questions.schema"

export class CreateUser{
    readonly name: string
    readonly password:string
    readonly field:string
    readonly email:string
}

export class CreateQuestion{
    readonly title: string
    readonly question:string
    readonly level:Level
    readonly example:string
    readonly answer:string
    readonly attempts:Number
    readonly creator:String
    readonly active:Number

}