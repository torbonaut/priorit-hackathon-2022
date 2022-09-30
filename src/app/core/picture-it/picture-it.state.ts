import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { mergeMap, tap } from "rxjs";
import { Pictures } from "./picture-it.actions";
import { EmptyPictureState, Picture, PictureItApiResponse, PicturesStateModel } from "./picture-it.model";
import { PictureItService } from "./picture-it.service";

@State({
    name: 'pictures',
    defaults: EmptyPictureState
})
@Injectable()
export class PicturesState {
    constructor(
        private readonly pictureItService: PictureItService,
        private readonly store: Store
    ) { }

    @Selector()
    static all(state: PicturesStateModel) {
        const items: { [key: number]: Picture } = { ...state.items };

        return Object.keys(items).map(key => items[parseInt(key)]);
    }


    @Action(Pictures.LoadAll)
    loadAll(ctx: StateContext<PicturesStateModel>, action: Pictures.LoadAll) {
        return this.pictureItService.loadPictures()
            .pipe(
                tap((response: PictureItApiResponse) => {
                    const ids: number[] = [];
                    const items: { [key: number]: Picture } = { };

                    response.data.forEach((item: Picture) => {
                        ids.push(item.id);
                        items[item.id] = item;
                    });

                    ctx.setState({ ids, items });
                })
            );
    }

    @Action(Pictures.Add)
    add(ctx: StateContext<PicturesStateModel>, action: Pictures.Add) {
        return this.pictureItService.addPicture(action.payload);
    }

}
