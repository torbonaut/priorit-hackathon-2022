import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AppHeaderTitleService } from 'src/app/app-header-title.service';
import { Appointments } from 'src/app/core/appointments/appointments.actions';
import { Appointment } from 'src/app/core/appointments/appointments.model';
import { AppointmentsState } from 'src/app/core/appointments/appointments.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  appointments$: Observable<Appointment[]>;

  subscription: Subscription = new Subscription();

  constructor(
    private readonly headerTitleService: AppHeaderTitleService,
    private readonly store: Store
  ) {
    this.headerTitleService.set('Dashboard');

    this.store.dispatch(new Appointments.LoadAll());

    this.appointments$ = this.store.select(AppointmentsState.all);
  }

}
