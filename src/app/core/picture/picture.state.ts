import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { PictureIts } from "./picture.actions";
import {  EmptyPictureItsState, PictureIt, PictureItsStateModel } from "./picture.model";
import { PictureItsService } from "./picture.service";

@State({
    name: 'pictureIts',
    defaults: EmptyPictureItsState
})
@Injectable()
export class PictureItsState {
    constructor(
        private readonly pictureItsService: PictureItsService,
        private readonly store: Store
    ) { }

    @Selector()
    static all(state: PictureItsStateModel) {
        const items: { [key: number]: PictureIt } = { ...state.items };

        return Object.keys(items).map(key => items[parseInt(key)]);
    }

    @Action(PictureIts.Add)
    add(ctx: StateContext<PictureItsStateModel>, action: PictureIts.Add) {
        return this.pictureItsService.addPictureIt(action.payload);
    }
}
