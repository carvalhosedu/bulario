import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {Welcome} from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private ofAuth: AngularFireAuth, private toast: ToastController,
              public navCtrl: NavController, public navParams: NavParams, public app: App) {

  }

  ionViewDidLoad() {
    this.ofAuth.authState.subscribe(data => {
      if (data && data.email) {
        this.toast.create({
          message: `Bem vindo ao APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: `Não foi possivel obter os detalhes da autenticação !`,
          duration: 3000
        }).present();
      }
    });
  }

  logout(){
    this.app.getRootNav().setRoot(Welcome);
  }
}
