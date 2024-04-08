import API from '../axiosInstance'
import { User } from '../models/users';


export const getAllUsers = async () => {

    try {
        const response = await API.get(`/users`);
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
};
export const deleteUser = async (id: number) => {
    try {
        const response = await API.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
};
export const saveUser = async(user:User) => {
    
    try {
        const response = await API.post(`/users`,user);
        return response.data;
    } catch (error:unknown) {
        console.log("error",error);
    }
};
export const updateUser = async(user:User) => {

    try {
        const response = await API.put(`/users/${user.user_id}`,user);
        return response.data;
    } catch (error) {
        console.log("error",error);
    }
};

export const getUserDetails= async (id:number) => {

    try {
        const response = await API.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
};

