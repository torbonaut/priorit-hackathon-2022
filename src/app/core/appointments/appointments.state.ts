import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { mergeMap, tap } from "rxjs";
import { Appointments } from "./appointments.actions";
import { Appointment, AppointmentsApiResponse, AppointmentsStateModel, EmptyAppointmentsState } from "./appointments.model";
import { AppointmentsService } from "./appointments.service";

@State({
    name: 'appointments',
    defaults: EmptyAppointmentsState
})
@Injectable()
export class AppointmentsState {
    constructor(
        private readonly appointmentsService: AppointmentsService,
        private readonly store: Store
    ) { }

    @Selector()
    static all(state: AppointmentsStateModel) {
        const items: { [key: number]: Appointment } = { ...state.items };

        return Object.keys(items).map(key => items[parseInt(key)]);
    }
    
    @Action(Appointments.LoadAll)
    loadAll(ctx: StateContext<AppointmentsStateModel>, action: Appointments.LoadAll) {
        return this.appointmentsService.loadAppointments()
            .pipe(
                tap((response: AppointmentsApiResponse) => {
                    const ids: number[] = [];
                    const items: { [key: number]: Appointment } = { };

                    response.data.forEach((item: Appointment) => { 
                        ids.push(item.id);
                        items[item.id] = item;
                    });

                    ctx.setState({ ids, items });
                })
            );
    }

    @Action(Appointments.Add)
    add(ctx: StateContext<AppointmentsStateModel>, action: Appointments.Add) {
        return this.appointmentsService.addAppointment(action.payload).pipe(
            mergeMap(() => this.store.dispatch(new Appointments.Refresh))
        );
    }

    @Action(Appointments.Refresh)
    refresh(ctx: StateContext<AppointmentsStateModel>, action: Appointments.Refresh) {
        return this.store.dispatch(new Appointments.LoadAll());
    }

    @Action(Appointments.AddUser)
    addUser(ctx: StateContext<AppointmentsStateModel>, action: Appointments.AddUser) {
        const state = ctx.getState();
    }
}