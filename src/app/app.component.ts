import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from "./menu/menu.component";
import { RodapeComponent } from './rodape/rodape.component';
import { NewsComponent } from "./news/news.component";
import { CalendarioComponent } from './calendario/calendario.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      CommonModule,
      MenuComponent, 
      RodapeComponent, 
      InicioComponent, 
      NewsComponent, 
      CalendarioComponent
    ]
})

export class AppComponent {
  title = 'jornalESP';
}
