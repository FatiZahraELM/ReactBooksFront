import { Book } from "./book";
import { User } from "./users";

export interface WishList{
    id?:number,
    user:User,
    book:Book
}