import { blogType } from "Type"
import axios from "axios"

export const useBlog = () => {

    const registerBlog = async (blog: blogType) => {
        try {
            await axios.post("/blog/register", blog);
        } catch (error) {
            alert(`登録に失敗しました。${error}`);
        }
    }

    return {registerBlog};
}
