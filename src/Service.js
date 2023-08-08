import axios from "axios";

export default class Service {
    static async getAll(page=1, limit=10) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/', {
                params: {
                    _limit: limit, 
                    _page: page
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    };
    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response;
    };
    static async getByCommsId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        console.log(response.data)
        return response;
    };
};