import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';

import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/personas/persona.component';

const routes: Routes = [
    { path: 'personas', component: PersonasComponent },
    { path: 'persona/:id', component: PersonaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'personas' },
];

export const ROUTER = RouterModule.forRoot(routes);
