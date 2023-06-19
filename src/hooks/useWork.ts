import { workType } from "Type"
import axios from "axios"

export const useWork = () => {

    const workRegister = async (work: workType) => {
        try {
            await axios.post("/work/register", work);
        } catch (error) {
            alert(`登録に失敗しました。${error}`);
        }
    }

    return {register: workRegister};
}