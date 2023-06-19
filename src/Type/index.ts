import { RawDraftContentState } from "draft-js";

//LocalStrageAdmin
export type adminType = {
    email: string,
    password: string;
}

export type workType = {
    adminId: string;
    tag: string;
    title: string;
    thumbnail: string;
    descriptionImage: string;
}

export type blogType = {
    adminId: string;
    title: string;
    content: string;
    thumbnail: string;
    descriptionImage: string;
}

export type newImageType = {
    thumbnail: File | null;
    descriptionImage: File | null;
}

export type uploadImageData = {
    thumbnail: string;
    descriptionImage: string;
}

export type imageType = {
  thumbnail: File | null;
  descriptionImage: File | null;
}

export type getWorkType = {
    _id: string;
    adminId: string;
    tag: string;
    title: string;
    thumbnail: string;
    descriptionImage: string;
    createdAt: string;
    updatedAt: string;
  };