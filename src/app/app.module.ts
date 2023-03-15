import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './components/nav.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { AppRoutingModule } from './app-routing.module';
import { MateriasComponent } from './materias/materias.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriasService } from './services/materias.service';
import { PaisesComponent } from './components/paises/paises.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PaisesService } from './services/paises.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DirectivasComponent,
    NavComponent,
    MateriasComponent,
    MateriaComponent,
    PaisesComponent,
    TarjetaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MateriasService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
