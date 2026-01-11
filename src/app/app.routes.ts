import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Admin } from './features/admin/admin';
import { Shop } from './features/shop/shop';
import { AboutUs } from './features/about-us/about-us';
import { Community } from './features/community/community';
import { MobileApp } from './features/mobile-app/mobile-app';

export const routes: Routes = [
    { path: '', component: Admin },
    { path: 'shop', component: Shop },
    // Add other routes here as you create the components
    { path: 'about', component: AboutUs }, // Placeholder
    { path: 'community', component: Community }, // Placeholder
    { path: 'app', component: MobileApp } // Placeholder
];
