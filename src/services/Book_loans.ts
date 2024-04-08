import { BookLoan } from './../models/bookLoan';
import API from '../axiosInstance'
export const getAllBooksLoans = async () => {

    try {
        const response = await API.get(`/bookLoans`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
export const getBookLoansByUser = async (id:number) => {

    try {
        const response = await API.get(`/users/${id}/bookLoans`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};

export const saveBookLoan = async(bookLoan:BookLoan) => {
    
    try {
        const response = await API.post(`/bookLoans`,bookLoan);
        return response.data;
    } catch (error:unknown) {
        console.log("error",error);
    }
};
