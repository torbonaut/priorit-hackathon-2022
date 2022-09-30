export interface PictureIt {
    user_created: string;
    picture: string;
    tip: string;
    title: string;
}

export interface PictureItsStateModel {
    ids: number[];
    items: { [key: number]: PictureIt };
}

export const EmptyPictureItsState: PictureItsStateModel = {
    ids: [],
    items: {}
}

export interface PictureItsApiResponse {
    data: PictureIt[];
}
