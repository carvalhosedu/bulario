import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaseiroPage} from "../caseiro/caseiro";
import {ReceitaPage} from "../receita/receita";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irremedio() {
      this.navCtrl.push(ReceitaPage);
  }

  ircaseiro(){
    this.navCtrl.push('CaseiroPage');
  }

}
