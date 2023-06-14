import { adminType } from 'Type'
import axios, { AxiosResponse } from 'axios';
import { useAppDispatch } from 'stores/hooks';
import { setAdmin } from 'stores/slice/adminSlice';



export const useAdmin = () => {
    const dispatch = useAppDispatch();

    const login = async (admin: adminType) => {

        const response:AxiosResponse<any> = await axios.post("/admin/login", admin);
        const adminId: string = response.data.admin._id;
        dispatch(setAdmin(adminId));

        const token = response.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem('token', token);
    }

    const getAdmin = async () => {
        try {
            const response = await axios.get("/admin/");
            const id = response.data;
            console.log("getUser id", id);
            dispatch(setAdmin(id));
        } catch (error) {
            console.log(error);
        }
    }

    return {login, getAdmin};
 }
