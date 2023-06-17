import { workType } from "Type"
import axios from "axios"

export const useWork = () => {

    const register = async (work: workType) => {
        try {
            await axios.post("/work/register", work);
        } catch (error) {
            console.log(error);
        }
    }

    return {register};
}