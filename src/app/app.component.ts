import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ma premier application';

  FCFA = new Devise("FCFA");
   Euro = new Devise("Euro");
   Dollar_us = new Devise("Dollar_us");
   Yen_japonais = new Devise("Yen_japonais");
   Livre_sterling = new Devise("Livre_sterling");
   Franc_suisse = new Devise("Franc_suisse");
   Dollar_canadien = new Devise("Dollar_canadien");
   Yuan_chinois = new Devise("Yuan_chinois");
   Dirham_UAE = new Devise("Dirham_UAE");
  
   listeDevise =[
      this.FCFA,
      this.Euro,
      this.Dollar_us,
      this.Yen_japonais,
      this.Livre_sterling,
      this.Franc_suisse,
      this.Dollar_canadien,
      this.Yuan_chinois,
      this.Dirham_UAE
   ];
  depart = this.FCFA;
  arrivee = this.Euro;

  public value = 0;
  public valuer = 0;

  
}
class Devise{
  name : String ='';
  constructor(name : String){
    this.name = name;
  }
}