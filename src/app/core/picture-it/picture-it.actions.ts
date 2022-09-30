import { Picture } from "./picture-it.model";

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
}