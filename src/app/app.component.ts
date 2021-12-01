import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'ConvertDevise ';
  listedesDevises = [
    'FCFA',
    'Euro',
    'Dollar us',
    'Yen japonais',
    'Livre sterling',
    'Franc suisse',
    'Dollar canadien',
    'Yuan chinois',
    'Dirham UAE',
  ];
  depart = 'Euro';
  arrivee = 'Euro';
  public value=0;
  public value2=0;

  test(){
    console.log('test');
  }
  setDeviseDepart(devise:String){
    this.depart = String(devise);
  }

  setDeviseArrivee(devise:String){
    this.arrivee = String(devise);
  }
}
