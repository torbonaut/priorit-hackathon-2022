import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment, AppointmentsApiResponse } from "./appointments.model";

@Injectable()
export class AppointmentsService {
    private readonly API_URL = 'https://k9i9drz6.directus.app/items/appointments';

    constructor(private readonly http: HttpClient) {}

    loadAppointment(id: number) {}

    loadAppointments(): Observable<AppointmentsApiResponse> {
        return this.http.get<AppointmentsApiResponse>(this.API_URL);
    }

    addAppointment(item: Omit<Appointment, "id" | 'createdBy' | 'createdDate'>) {
        return this.http.post(this.API_URL, { ...item });
    }

    deleteAppointment() {}
}
