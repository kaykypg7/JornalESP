import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NewsComponent } from './news/news.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full'}, 
    { path: 'inicio', component:InicioComponent},
    { path: 'news', component:NewsComponent},
    { path: 'calendario', component:CalendarioComponent},
    { path: 'sobre', component:SobreComponent}
    
];
