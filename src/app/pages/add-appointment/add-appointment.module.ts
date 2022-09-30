import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddAppointmentRoutingModule } from "./add-appointment-routing.module";
import { AddAppointmentComponent } from "./add-appointment.component";

@NgModule({
    declarations: [
        AddAppointmentComponent
    ],
    imports: [
        AddAppointmentRoutingModule,
        CommonModule,
        NzFormModule,
        NzSelectModule,
        NzDatePickerModule,
        NzButtonModule],
    exports: [AddAppointmentComponent]
})
export class AddAppointmentModule { }
