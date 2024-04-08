import { Book } from './book';
import { User } from './users';
export interface BookLoan{
    id?:number,
    book:Book,
    user:User
}