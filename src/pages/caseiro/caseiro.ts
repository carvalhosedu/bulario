import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home"
import { RemedioCaseiroPage} from "../remedio-caseiro/remedio-caseiro";

/**
 * Generated class for the CaseiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caseiro',
  templateUrl: 'caseiro.html',
})
export class CaseiroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltar() {
    this.navCtrl.push('HomePage');
  }

  irremediocaseiro() {
    this.navCtrl.push('RemedioCaseiroPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseiroPage');
  }

}
