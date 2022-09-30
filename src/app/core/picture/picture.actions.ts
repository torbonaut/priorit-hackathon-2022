import { PictureIt } from "./picture.model";

export namespace PictureIts {
    export class Add {
        static readonly type = '[PictureIts] Add';
        constructor(public payload: Omit<PictureIt, 'user_created'>) {}
    }
}
