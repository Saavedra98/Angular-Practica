import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  Aptitudes = [
    ['SQL Server', 'Intermedio'],
    ['PostgreSQL', 'Intermedio'],
    ['Excel', 'Avanzado'],
    ['Google Sheets', 'Intermedio'],
    ['HTML', 'Avanzado'],
    ['CSS', 'Intermedio'],
    ['JavaScript', 'Intermedio'],
    ['Angular', 'Intermedio'],
    ['Power Bi', 'Intermedio'],
    ['Python', 'Basico'],
    ['R', 'Basico']    
  ];
  
  Registrar(aptitudInput:String, nivelInput:String){
    this.Aptitudes.push([String(aptitudInput), String(nivelInput)]);
  }

}
