import { Routes } from '@angular/router';
import { VizsgaertekeloComponent } from './vizsgaertekelo/vizsgaertekelo.component';

export const routes: Routes = [
    {path: 'vizsgaertekelo', component: VizsgaertekeloComponent},
    {path: '', redirectTo: '/vizsgaertekelo', pathMatch: 'full'},
    {path: '**', redirectTo: '/vizsgaertekelo', pathMatch:'full'}
];
