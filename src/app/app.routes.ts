import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [{
    path:'',
    component: HomeComponent,
},{
    path: '**',
    loadComponent() {
        return import('./modules/portfolio/pages/home/home.component').then(m => m.HomeComponent);
    },
}];
