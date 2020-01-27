import { Component } from '@angular/core';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alertifyjs';



  ejecutar(){
    alertify.alert('Alert Message!', function(){ alertify.success('Ok'); });
  }

  ejecutar2(){
    alertify.confirm('titulo','texto titlo',
    ()=> {console.log('funcion ok');},
    ()=> { alertify.error('Cancelar')}).set('labels',{ok:'ok', cancel:'cancelar'}) ;



  }

}
