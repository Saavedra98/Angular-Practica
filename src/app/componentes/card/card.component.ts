import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  element=false;
  condicion=false;


  mostrar(){

    if(this.element==true){
      this.element=false;
    }
    else{
      this.element=true;
    }

  }


  redes(){
    if(this.condicion==true){
      this.condicion=false;
    }
    else{
      this.condicion=true;
    }
  }

}
