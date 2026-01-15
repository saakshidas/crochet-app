import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { AboutUs } from './features/about-us/about-us';
import { Community } from './features/community/community';
import { MobileApp } from './features/mobile-app/mobile-app';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'shop', component: Shop },
    { path: 'about', component: AboutUs },
    { path: 'community', component: Community },
    { path: 'app', component: MobileApp }
];
