import { RouterModule, Routes } from '@angular/router';
import { ComponentesModule } from './componentes/componentes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CardComponent } from './componentes/card/card.component';


const appRoutes:Routes=[
    {path:'', component:CardComponent},
    {path:'aptitudes', component:PrincipalComponent},
    {path:'experiencia', component:ExperienciaComponent},
    {path:'formulario', component:FormularioComponent},
]


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        ComponentesModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule { }
