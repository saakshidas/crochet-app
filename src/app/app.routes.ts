import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Admin } from './features/admin/admin';

export const routes: Routes = [
    { path: '', component: Admin }
];
