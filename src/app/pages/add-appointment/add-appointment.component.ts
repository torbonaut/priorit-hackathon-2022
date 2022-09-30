import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Actions, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppHeaderTitleService } from "src/app/app-header-title.service";
import { User } from "src/app/core/user/user.actions";
import { UserStateModel } from "src/app/core/user/user.model";
import { UserState } from "src/app/core/user/user.state";
import { Appointments } from 'src/app/core/appointments/appointments.actions';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'add-appointment',
    styleUrls: ['./add-appointment.component.scss'],
    templateUrl: './add-appointment.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAppointmentComponent {
    userData$: Observable<UserStateModel>;
    form = new FormGroup({
        category: new FormControl(''),
        title: new FormControl(''),
        when: new FormControl(new Date()),
    });
    // title: FormControl = new FormControl();
    // when: FormControl = new FormControl();
    // category:FormControl = new FormControl();
    selectedUsers: string[] = [];
    availableUsers: string[] = ["Max Muster", "Susi Sorglos"];

    constructor(
        headerTitleService: AppHeaderTitleService,
        private store: Store,
        private readonly actions$: Actions,
        private fb: UntypedFormBuilder
    ) {
        headerTitleService.set('Neue Aktivität');

        const isUserLoaded: boolean = store.selectSnapshot<boolean>(UserState.isLoaded);

        if (!isUserLoaded) {
            store.dispatch(new User.GetCurrent());
        }

        this.userData$ = store.select(UserState.userData);
    }

    submitForm(): void {
        console.log("test: " + this.form.value.when?.toISOString().replace(/.\d+Z$/g, ""));
        this.store.dispatch(
            new Appointments.Add({
                when: this.form.value.when?.toISOString().replace(/.\d+Z$/g, "") || '',
                category: this.form.value.category || '',
                title: this.form.value.title || ''
            })
        );
    }
}
