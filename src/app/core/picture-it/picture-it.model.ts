export interface Picture {
    id: number;
    title: string;
    picture: string;
    createdBy: number;
    createdDate: string;
    is_open: boolean;
    tip: String;
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