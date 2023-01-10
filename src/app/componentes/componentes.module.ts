import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './experiencia/experiencia.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    PrincipalComponent,
    FormularioComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],exports: [
    NavbarComponent,
    CardComponent,
    PrincipalComponent,
    FormularioComponent,
    ExperienciaComponent
  ],
})
export class ComponentesModule { }
