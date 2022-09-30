export interface Appointment {
    id: number;
    createdBy: number;
    createdDate: string;
    when: string;
    category: string;
    title: string;
}

export interface AppointmentsStateModel {
    ids: number[];
    items: { [key: number]: Appointment };
}

export const EmptyAppointmentsState: AppointmentsStateModel = {
    ids: [],
    items: {}
}

export interface AppointmentsApiResponse {
    data: Appointment[];
}