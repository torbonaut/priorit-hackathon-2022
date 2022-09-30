import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, map, Observable, pipe, Subject, Subscription, takeUntil, tap, withLatestFrom } from 'rxjs';
import { AppHeaderTitleService } from 'src/app/app-header-title.service';
import { Appointments } from 'src/app/core/appointments/appointments.actions';
import { Appointment } from 'src/app/core/appointments/appointments.model';
import { AppointmentsState } from 'src/app/core/appointments/appointments.state';
import { User } from 'src/app/core/user/user.actions';
import { UserStateModel } from 'src/app/core/user/user.model';
import { UserState } from 'src/app/core/user/user.state';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
    allAppointments$: Observable<Appointment[]>;
    myAppointments$: Observable<Appointment[]>;
    otherAppointments$: Observable<Appointment[]>;
  user$: Observable<UserStateModel>;
  userLoaded$: Observable<boolean>;
  unsubscribe$: Subject<void> = new Subject();


    constructor(
        private readonly headerTitleService: AppHeaderTitleService,
        private readonly store: Store
    ) {
        this.headerTitleService.set('Dashboard');

      this.store.dispatch(new Appointments.LoadAll());

      this.userLoaded$ = this.store.select(UserState.isLoaded);
      this.userLoaded$.pipe(takeUntil(this.unsubscribe$)).subscribe(isUserLoaded => {
        if (!isUserLoaded) {
          this.store.dispatch(new User.GetCurrent());
        }
      })
      
      this.user$ = this.store.select(UserState.userData);

      this.allAppointments$ = this.store.select(AppointmentsState.all);
      this.myAppointments$ = this.allAppointments$.pipe(
          withLatestFrom(this.user$),
          map(([appointments, user]) =>
              appointments.filter((item) => item.user_created === user.id)
          )
      );
      this.otherAppointments$ = this.allAppointments$.pipe(
                withLatestFrom(this.user$),
                map(([appointments, user]) =>
                    appointments.filter(
                        (item) => item.user_created !== user.id
                    )
                )
            );
    }
  
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
