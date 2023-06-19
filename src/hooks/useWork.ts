import { getWorkType, workType } from "Type";
import axios, { AxiosResponse } from "axios";

export const useWork = () => {

    const registerWork = async (work: workType) => {
        try {
            await axios.post("/work/register", work);
        } catch (error) {
            alert(`登録に失敗しました。${error}`);
        }
    }

    const getWorks = async (): Promise<AxiosResponse<getWorkType[]>> => {
        try {
            const response: AxiosResponse<getWorkType[]> = await axios.get("/work/get");
            return response;
        } catch (error) {
            alert(`取得に失敗しました。${error}`);
            throw error;
        }
    }

    const getDetailWork = async (id: string): Promise<AxiosResponse<getWorkType>> => {
        try {
            const response: AxiosResponse<getWorkType> = await axios.get(`/work/${id}`);
            return response;
        } catch (error) {
            alert(`取得に失敗しました。${error}`);
            throw error;
        }
    }

    return {registerWork, getWorks, getDetailWork};
}