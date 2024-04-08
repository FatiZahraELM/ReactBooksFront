import { WishList } from './../models/wishList';
import API from '../axiosInstance'
export const getAllWishLists = async () => {

    try {
        const response = await API.get(`/wishLists`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
export const getWishListByUser = async (id:number) => {

    try {
        const response = await API.get(`/users/${id}/wishLists`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};

export const saveWishList = async(wishList:WishList) => {
    
    try {
        const response = await API.post(`/wishLists`,wishList);
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