export interface Picture {
    id: number;
    title: string;
    picture: string;
    user_created: number;
    date_created: string;
    is_open: boolean;
    tip: String;
}

export interface PictureUpload {
    file: FormData,
    title: string,
    tip: string
}


export interface PicturesStateModel {
    ids: number[];
    items: { [key: number]: Picture };
}

export const EmptyPictureState: PicturesStateModel = {
    ids: [],
    items: {}
}

export interface PictureItApiResponse {
    data: Picture[];
}

export interface FileUploadApiResponse {
    data: FileUploadResponse;
}

export interface FileUploadResponse {
    id: string;
}
