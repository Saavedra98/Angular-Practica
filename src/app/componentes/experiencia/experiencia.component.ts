import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  trabajos = [
    ['Puesto 1', 'Empresa 1', 'Descripcion 1'], ['Puesto 2', 'Empresa 2', 'Descripcion 2'],
    ['Puesto 3', 'Empresa 3', 'Descripcion 3']
  ];

  registrar(puestoInput:String, empresaInput:String, descripcionInput:String){
    this.trabajos.push([String(puestoInput), String(empresaInput), String(descripcionInput)]);
  }

}
