import API from '../axiosInstance'
import { Rating } from '../models/rating';
export const getAllRatings = async () => {

    try {
        const response = await API.get(`/ratings`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
export const getRatingsByUser = async (id:number) => {

    try {
        const response = await API.get(`/users/${id}/ratings`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
export const saveRating= async(rating:Rating) => {
    
    try {
        const response = await API.post(`/ratings`,rating);
        return response.data;
    } catch (error:unknown) {
        console.log("error",error);
    }
};

export const fetchUserByName = async (name:string) => {
    try {
    const response = await API.get(`/users/${name}`);
    return response.data;
    } catch (error:unknown) {
    console.log("error",error);
}
};

export const fetchBookByTitle = async (title:string) => {
    try {
    const response = await API.get(`/books/${title}`);
    return response.data;
} catch (error:unknown) {
console.log("error",error);
}
};
