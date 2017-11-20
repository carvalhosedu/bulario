import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaseiroPage} from "../caseiro/caseiro";

/**
 * Generated class for the RemedioCaseiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remedio-caseiro',
  templateUrl: 'remedio-caseiro.html',
})
export class RemedioCaseiroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastrar() {
    this.navCtrl.push('CaseiroPage');
  }

  sair() {
    this.navCtrl.push('CaseiroPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemedioCaseiroPage');
  }

}
