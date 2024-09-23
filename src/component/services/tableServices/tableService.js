import axios from "axios";

class TableService {
    static getUserData(url) {
        return axios.get(url);
    }
}

export default TableService;





// export const fetchTableData = async (url)=>{
//     const response = await axios.get(url);
//     console.log("table data response---->", response)
//     return response.data;
    
// };