import axios from "axios";

class TableService {
    static async getUserData(url) {
        try {
            const response = await axios.get(url);
            return response.data; 
        } catch (error) {
            throw error; 
        }
    }
}

export default TableService;
