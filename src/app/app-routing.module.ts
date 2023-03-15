import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from './body/body.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PaisesComponent } from './components/paises/paises.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MateriaComponent } from './materia/materia.component';

const ROUTES : Routes = [
  {path:'home',component:BodyComponent},
  {path:'directivas',component:DirectivasComponent},
  {path:'materias',component:MateriaComponent},
  {path:'paises',component:PaisesComponent},
  {path:'detallePais/:id',component:DetalleComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
