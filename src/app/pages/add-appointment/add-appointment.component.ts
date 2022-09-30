import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppHeaderTitleService } from "src/app/app-header-title.service";
import { User } from "src/app/core/user/user.actions";
import { UserStateModel } from "src/app/core/user/user.model";
import { UserState } from "src/app/core/user/user.state";

@Component({
    selector: 'add-appointment',
    styleUrls: ['./add-appointment.component.scss'],
    templateUrl: './add-appointment.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAppointmentComponent {
    userData$: Observable<UserStateModel>;

    constructor(
        headerTitleService: AppHeaderTitleService,
        store: Store
    ) {
        headerTitleService.set('Neue Aktivität');

        const isUserLoaded: boolean = store.selectSnapshot<boolean>(UserState.isLoaded);

        if (!isUserLoaded) {
            store.dispatch(new User.GetCurrent());
        }

        this.userData$ = store.select(UserState.userData);
    }

    submitForm(): void {
        console.log('submit');
      }
}
