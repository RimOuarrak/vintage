import { model, Schema } from "mongoose";

export interface Gem{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    Time:string;
}

export const GemSchema = new Schema<Gem>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true},
        Time: {type: String, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
)

export const GemModel = model<Gem>('gem',GemSchema);