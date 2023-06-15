import { adminType } from 'Type'
import axios, { AxiosResponse } from 'axios';
import { useAppDispatch } from 'stores/hooks';
import { deleteAdmin, setAdmin } from 'stores/slice/adminSlice';



export const useAdmin = () => {
    const dispatch = useAppDispatch();

    const login = async (admin: adminType) => {

        const response:AxiosResponse = await axios.post("/admin/login", admin);
        const adminId: string = response.data.admin._id;
        dispatch(setAdmin(adminId));

        const token = response.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem('token', token);
    }

    const getAdmin = async () => {
        try {
            const response: AxiosResponse = await axios.get("/admin");
            const id = response.data._id;
            dispatch(setAdmin(id));
        } catch (error) {
            console.log(error);
        }
    }

    const getRegisterAdmin = async (id:string): Promise<AxiosResponse | undefined> => {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const response: AxiosResponse = await axios.get("/admin");
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const updateAdmin = async () => {
        try {
            const response: AxiosResponse = await axios.get("/update");
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        const token = null;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(deleteAdmin(null));
        localStorage.removeItem("token");
    }

    return {login, getAdmin, logout, updateAdmin, getRegisterAdmin};
 }
