import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaseiroPage} from "../caseiro/caseiro";
import {ReceitaPage} from "../receita/receita";
import {AngularFireAuth} from "angularfire2/auth";
import {BulaPage} from "../bula/bula";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  private auth: AngularFireAuth) {

  }

  irremedio() {
      this.navCtrl.push(ReceitaPage);
  }

  ircaseiro(){
    this.navCtrl.push(CaseiroPage);
  }

  irbula(){
    this.navCtrl.push(BulaPage);
  }

  signOut() {
    this.auth.auth.signOut();
  }

}
