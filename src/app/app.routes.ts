import { Routes } from '@angular/router';
import { PortalComponent } from './portal-component/portal-component';
import { CalendarApp } from './calendar-app/calendar-app';

const portal = {
    path: "",
    component: PortalComponent,
}

const calendar = {
    path: "calendar",
    component: CalendarApp
}

export const routes: Routes = [
    calendar, portal,
];
