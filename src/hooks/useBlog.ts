import { blogType, getBlogType, getWorkType } from "Type"
import axios, { AxiosResponse } from "axios"

export const useBlog = () => {

    const registerBlog = async (blog: blogType) => {
        try {
            await axios.post("/blog/register", blog);
        } catch (error) {
            alert(`登録に失敗しました。${error}`);
        }
    }

    const getBlogs = async (): Promise<AxiosResponse<getBlogType[]>> => {
        try {
            const response: AxiosResponse<getBlogType[]> = await axios.get("/blog/get");
            return response;
        } catch (error) {
            alert(`取得に失敗しました。${error}`);
            throw error;
        }
    }

    const getDetailBlog = async (id: string): Promise<AxiosResponse<getBlogType>> => {
        try {
            const response: AxiosResponse<getBlogType> = await axios.get(`/blog/${id}`);
            return response;
        } catch (error) {
            alert(`取得に失敗しました。${error}`);
            throw error;
        }
    }

    return {registerBlog, getBlogs, getDetailBlog};
}
