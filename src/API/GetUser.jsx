import axios from "axios"
import {addUserList} from "../Redux/Slice/UserSlice";

export const GetUserList = (setLoading,pagination = {page: 0, limit: 5}) => {
    return function (dispath) {
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${pagination.page}&_limit=${pagination.limit}`)
            .then((e) => e.data.length > 1? dispath(addUserList(e.data)) : null)
            .then(()=>setLoading(true));

    }
}
