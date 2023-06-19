import { blogType, newImageType, uploadImageData, workType } from "Type";
import axios from "axios";


export const useUploadImage = () => {
    
    const prepareAndUploadImages = (
        thumbnail: File | null,
        descriptionImage: File | null,
        uploadData: blogType | workType,
        newData: blogType | workType): blogType | workType => {

        const images: newImageType = {
            thumbnail: thumbnail || null,
            descriptionImage: descriptionImage || null,
        }

        const nowDate: number = Date.now();
    
        uploadImagesToServer(images, nowDate);
    
        const uploadImageData: uploadImageData = {
            thumbnail: thumbnail !== null ? nowDate + thumbnail.name : "",
            descriptionImage: descriptionImage !== null ? nowDate + descriptionImage.name : "",
        }
    
        uploadData = {...newData, ...uploadImageData};

        return uploadData;
    }

    const uploadImagesToServer = async (images: Record<string, File | null>, nowDate: number) => {
        await Promise.all(Object.entries(images)
            .filter(([_, image]) => image !== null) 
            .map(async ([_, image]) => {
            const data = new FormData();
            const fileName = nowDate + image!.name;
            data.append("name", fileName);
            data.append("file", image!);

            try {
                //画像APIを叩く
                await axios.post("/upload", data);
            } catch (error) {
                alert(`画像のアップロードに失敗しました。${error}`);
            }
        }));
    }

    return {prepareAndUploadImages};
}
