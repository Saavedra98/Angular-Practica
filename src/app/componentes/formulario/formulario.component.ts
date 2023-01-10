import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],

      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje: ['',
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      ]

    })

  }
  
  aceptado = false ;
  rechazado = false;


  send(): any {
     if(this.formLogin.valid == true){
      this.aceptado = true;
      this.rechazado = false;
     }else{
      this.rechazado = true;
      this.aceptado = false;

     }
  }
}
