import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngxs/store";
import { map, Observable, Subject } from 'rxjs';
import { AppHeaderTitleService } from "src/app/app-header-title.service";
import { Pictures } from "src/app/core/picture-it/picture-it.actions";
import { Picture } from "src/app/core/picture-it/picture-it.model";
import { PicturesState } from "src/app/core/picture-it/picture-it.state";
import { PictureTips } from "src/app/core/picture-tip/picture-tip.actions";
import { PictureTip } from "src/app/core/picture-tip/picture-tip.model";
import { PictureTipState } from "src/app/core/picture-tip/picture-tip.state";
import { User } from "src/app/core/user/user.actions";
import { UserStateModel } from "src/app/core/user/user.model";
import { UserState } from "src/app/core/user/user.state";

@Component({
    selector: 'picture-tip',
    styleUrls: ['./picture-tip.component.scss'],
    templateUrl: './picture-tip.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureTipComponent implements OnDestroy{

    private unsubscribe$: Subject<void> = new Subject();
    userData$: Observable<UserStateModel>;
    allPictures$: Observable<Picture[]>;
    picture$: Observable<Picture|undefined>;
    pictureId: number;
    user$: Observable<UserStateModel>;

    allPictureTips$: Observable<PictureTip[]>;

    form = new FormGroup({
        myTip: new FormControl(''),
    });

    constructor(
        headerTitleService: AppHeaderTitleService,
        private readonly store: Store
    ) {

        this.pictureId = 1;
        headerTitleService.set('Tipp abgeben');

        this.store.dispatch(new Pictures.LoadAll());

        this.user$ = this.store.select(UserState.userData);
        this.userData$ = store.select(UserState.userData);
        this.allPictures$ = this.store.select(PicturesState.all);
        
        this.picture$ = this.allPictures$.pipe(
            map(pictures => pictures.find(item => item.id === this.pictureId))
        );

        this.allPictureTips$ = this.store.select(PictureTipState.all);
        
    }

    submitForm(): void {
        this.userData$.subscribe(user =>
            this.store.dispatch(
                new PictureTips.Add({
                    tip: this.form.value.myTip || '',
                    is_correct: false
                }))
        );
      }

      ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
