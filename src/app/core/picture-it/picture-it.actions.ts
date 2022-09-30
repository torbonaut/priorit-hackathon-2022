import { Picture, PictureClose } from "./picture-it.model";

export namespace Pictures {

    export class Refresh {
        static readonly type = '[Pictures] Refresh Pictures';
    }

    export class LoadAll {
        static readonly type = '[Pictures] Load All';
    }

    export class LoadById {
        static readonly type = '[Pictures] Load By Id';
        constructor(public payload: number) {

        };
    }

    export class Update {
        static readonly type = '[Pictures] Update';
        constructor(public payload: PictureClose) {}
    }
}