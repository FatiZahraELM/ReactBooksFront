import API from '../axiosInstance'
import { Book } from '../models/book';
export const getAllBooks = async () => {

    try {
        const response = await API.get(`/books`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
export const saveBook = async (book: Book) => {

    try {
        const response = await API.post(`/books`, book);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};


export const deleteBook = async (id: number) => {
    try {
        const response = await API.delete(`/books/${id}`);
        return response.data;

    } catch (error: unknown) {
        console.log(error);
    }
};
export const updateBook = async(book:Book) => {

    try {
        const response = await API.put(`/books/${book.book_id}`,book);
        return response.data;
    } catch (error) {
        console.log("error",error);
    }
};
export const getBookDetails= async (id:number) => {

    try {
        const response = await API.get(`/books/${id}`);
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
};