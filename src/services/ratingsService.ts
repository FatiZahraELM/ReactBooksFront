import API from '../axiosInstance'
export const getAllRatings = async () => {

    try {
        const response = await API.get(`/ratings`);
        return response.data;
    } catch (error: unknown) {
        console.log('Unknown error: ' + error);
    }

};
