import { Picture, PictureUpload } from "./picture-it.model";

export namespace Pictures {

    export class Refresh {
        static readonly type = '[Picture] Refresh Pictures';
    }

    export class LoadAll {
        static readonly type = '[Picture] Load All';
    }

    export class LoadById {
        static readonly type = '[Picture] Load By Id';
        constructor(public payload: number) {

        };
    }

    export class Add {
        static readonly type = '[Picture] Add';
        constructor(public payload: Omit<Picture, 'user_created' | 'id' | 'date_created'>) {}
    }

    export class UploadFile {
        static readonly type = '[Picture] Upload Image';
        constructor(public payload: PictureUpload) {}
    }
}
