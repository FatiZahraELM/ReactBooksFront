import { Book } from "./book";
import { User } from "./users";

export interface Rating{
    rating_id?:number,
    rating:string,
    user:User,
    book:Book
}