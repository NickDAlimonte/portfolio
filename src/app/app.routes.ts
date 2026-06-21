import { Routes } from '@angular/router';
import { PortalComponent } from './portal-component/portal-component';
import { CalendarApp } from './calendar-app/calendar-app';
import { MenuCalculator } from './menu-calculator/menu-calculator';

const portal = {
    path: "",
    component: PortalComponent,
}

const calendar = {
    path: "calendar",
    component: CalendarApp
}

const menuCalculator = {
    path: "menu-calculator",
    component: MenuCalculator
}
export const routes: Routes = [
    calendar, portal, menuCalculator
];
